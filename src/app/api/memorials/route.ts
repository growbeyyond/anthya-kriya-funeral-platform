import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { memorials } from '@/db/schema';
import { like, or, sql, count } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, coverImageUrl, personName, dateOfBirth, dateOfPassing, createdBy } = body;

    // Validate required fields
    if (!title || title.trim().length === 0) {
      return NextResponse.json({ 
        error: "Title is required",
        code: "MISSING_TITLE" 
      }, { status: 400 });
    }

    if (!personName || personName.trim().length === 0) {
      return NextResponse.json({ 
        error: "Person name is required",
        code: "MISSING_PERSON_NAME" 
      }, { status: 400 });
    }

    // Create the memorial
    const now = Date.now();
    const newMemorial = await db.insert(memorials).values({
      title: title.trim(),
      description: description || null,
      coverImageUrl: coverImageUrl || null,
      personName: personName.trim(),
      dateOfBirth: dateOfBirth || null,
      dateOfPassing: dateOfPassing || null,
      createdAt: now,
      updatedAt: now,
      createdBy: createdBy || null,
    }).returning();

    return NextResponse.json(newMemorial[0], { status: 201 });
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
    const search = searchParams.get('search') || searchParams.get('q');
    
    const offset = (page - 1) * pageSize;
    
    // Build query with optional search
    let query = db.select().from(memorials);
    let countQuery = db.select({ count: count() }).from(memorials);
    
    if (search && search.trim()) {
      const searchTerm = `%${search.trim()}%`;
      const searchCondition = or(
        like(memorials.title, searchTerm),
        like(memorials.personName, searchTerm)
      );
      query = query.where(searchCondition);
      countQuery = countQuery.where(searchCondition);
    }
    
    // Get total count
    const totalResult = await countQuery;
    const total = totalResult[0]?.count || 0;
    
    // Get paginated results
    const results = await query
      .limit(pageSize)
      .offset(offset)
      .orderBy(sql`${memorials.createdAt} DESC`);
    
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