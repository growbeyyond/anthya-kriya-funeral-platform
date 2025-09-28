import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { emergencyBookings } from '@/db/schema';
import { like, or, eq, and, sql, count } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      contactName, 
      contactPhone, 
      relationship, 
      locationAddress, 
      city, 
      faithTradition, 
      notes, 
      status, 
      priority, 
      scheduledAt,
      createdBy 
    } = body;

    // Validate required fields
    if (!contactName || contactName.trim().length === 0) {
      return NextResponse.json({ 
        error: "Contact name is required",
        code: "MISSING_CONTACT_NAME" 
      }, { status: 400 });
    }

    if (!contactPhone || contactPhone.trim().length === 0) {
      return NextResponse.json({ 
        error: "Contact phone is required",
        code: "MISSING_CONTACT_PHONE" 
      }, { status: 400 });
    }

    if (!locationAddress || locationAddress.trim().length === 0) {
      return NextResponse.json({ 
        error: "Location address is required",
        code: "MISSING_LOCATION_ADDRESS" 
      }, { status: 400 });
    }

    // Validate enum values if provided
    if (status && !['new', 'assigned', 'in_progress', 'completed', 'cancelled'].includes(status)) {
      return NextResponse.json({ 
        error: "Invalid status value",
        code: "INVALID_STATUS" 
      }, { status: 400 });
    }

    if (priority && !['normal', 'urgent'].includes(priority)) {
      return NextResponse.json({ 
        error: "Invalid priority value",
        code: "INVALID_PRIORITY" 
      }, { status: 400 });
    }

    // Create the booking
    const now = Date.now();
    const newBooking = await db.insert(emergencyBookings).values({
      contactName: contactName.trim(),
      contactPhone: contactPhone.trim(),
      relationship: relationship || null,
      locationAddress: locationAddress.trim(),
      city: city?.trim() || 'Hyderabad',
      faithTradition: faithTradition || null,
      notes: notes || null,
      status: status || 'new',
      priority: priority || 'normal',
      scheduledAt: scheduledAt || null,
      createdAt: now,
      updatedAt: now,
      createdBy: createdBy || null,
    }).returning();

    return NextResponse.json(newBooking[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(50, Math.max(1, parseInt(searchParams.get('pageSize') || '10')));
    const statusFilter = searchParams.get('status');
    const cityFilter = searchParams.get('city');
    const priorityFilter = searchParams.get('priority');
    const search = searchParams.get('q') || searchParams.get('search');
    
    const offset = (page - 1) * pageSize;
    
    // Build query conditions
    const conditions = [];
    
    if (statusFilter) {
      conditions.push(eq(emergencyBookings.status, statusFilter));
    }
    
    if (cityFilter) {
      conditions.push(eq(emergencyBookings.city, cityFilter));
    }
    
    if (priorityFilter) {
      conditions.push(eq(emergencyBookings.priority, priorityFilter));
    }
    
    if (search && search.trim()) {
      const searchTerm = `%${search.trim()}%`;
      conditions.push(
        or(
          like(emergencyBookings.contactName, searchTerm),
          like(emergencyBookings.contactPhone, searchTerm)
        )
      );
    }
    
    // Combine all conditions
    const whereCondition = conditions.length > 0 ? and(...conditions) : undefined;
    
    // Build queries
    let query = db.select().from(emergencyBookings);
    let countQuery = db.select({ count: count() }).from(emergencyBookings);
    
    if (whereCondition) {
      query = query.where(whereCondition);
      countQuery = countQuery.where(whereCondition);
    }
    
    // Get total count
    const totalResult = await countQuery;
    const total = totalResult[0]?.count || 0;
    
    // Get paginated results
    const results = await query
      .limit(pageSize)
      .offset(offset)
      .orderBy(sql`${emergencyBookings.createdAt} DESC`);
    
    return NextResponse.json({
      data: results,
      page,
      pageSize,
      total
    });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}