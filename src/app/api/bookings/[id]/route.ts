import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { emergencyBookings } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const booking = await db.select()
      .from(emergencyBookings)
      .where(eq(emergencyBookings.id, parseInt(id)))
      .limit(1);

    if (booking.length === 0) {
      return NextResponse.json({ 
        error: 'Booking not found' 
      }, { status: 404 });
    }

    return NextResponse.json(booking[0]);

  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const requestBody = await request.json();
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
      scheduledAt
    } = requestBody;

    // Validate status enum if provided
    if (status && !['new', 'assigned', 'in_progress', 'completed', 'cancelled'].includes(status)) {
      return NextResponse.json({ 
        error: "Invalid status value. Must be one of: new, assigned, in_progress, completed, cancelled",
        code: "INVALID_STATUS" 
      }, { status: 400 });
    }

    // Validate priority enum if provided
    if (priority && !['normal', 'urgent'].includes(priority)) {
      return NextResponse.json({ 
        error: "Invalid priority value. Must be one of: normal, urgent",
        code: "INVALID_PRIORITY" 
      }, { status: 400 });
    }

    // Validate required fields if being updated
    if (contactName !== undefined && (!contactName || contactName.trim() === '')) {
      return NextResponse.json({ 
        error: "Contact name is required",
        code: "MISSING_CONTACT_NAME" 
      }, { status: 400 });
    }

    if (contactPhone !== undefined && (!contactPhone || contactPhone.trim() === '')) {
      return NextResponse.json({ 
        error: "Contact phone is required",
        code: "MISSING_CONTACT_PHONE" 
      }, { status: 400 });
    }

    if (locationAddress !== undefined && (!locationAddress || locationAddress.trim() === '')) {
      return NextResponse.json({ 
        error: "Location address is required",
        code: "MISSING_LOCATION_ADDRESS" 
      }, { status: 400 });
    }

    // Validate scheduledAt is integer if provided
    if (scheduledAt !== undefined && (scheduledAt !== null && (!Number.isInteger(scheduledAt) || scheduledAt < 0))) {
      return NextResponse.json({ 
        error: "Scheduled time must be a valid timestamp (epoch milliseconds)",
        code: "INVALID_SCHEDULED_AT" 
      }, { status: 400 });
    }

    // Check if booking exists
    const existingBooking = await db.select()
      .from(emergencyBookings)
      .where(eq(emergencyBookings.id, parseInt(id)))
      .limit(1);

    if (existingBooking.length === 0) {
      return NextResponse.json({ 
        error: 'Booking not found' 
      }, { status: 404 });
    }

    // Prepare update data
    const updateData: any = {
      updatedAt: Date.now()
    };

    if (contactName !== undefined) updateData.contactName = contactName.trim();
    if (contactPhone !== undefined) updateData.contactPhone = contactPhone.trim();
    if (relationship !== undefined) updateData.relationship = relationship;
    if (locationAddress !== undefined) updateData.locationAddress = locationAddress.trim();
    if (city !== undefined) updateData.city = city.trim();
    if (faithTradition !== undefined) updateData.faithTradition = faithTradition;
    if (notes !== undefined) updateData.notes = notes;
    if (status !== undefined) updateData.status = status;
    if (priority !== undefined) updateData.priority = priority;
    if (scheduledAt !== undefined) updateData.scheduledAt = scheduledAt;

    const updated = await db.update(emergencyBookings)
      .set(updateData)
      .where(eq(emergencyBookings.id, parseInt(id)))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json({ 
        error: 'Failed to update booking' 
      }, { status: 500 });
    }

    return NextResponse.json(updated[0]);

  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if booking exists
    const existingBooking = await db.select()
      .from(emergencyBookings)
      .where(eq(emergencyBookings.id, parseInt(id)))
      .limit(1);

    if (existingBooking.length === 0) {
      return NextResponse.json({ 
        error: 'Booking not found' 
      }, { status: 404 });
    }

    const deleted = await db.delete(emergencyBookings)
      .where(eq(emergencyBookings.id, parseInt(id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json({ 
        error: 'Failed to delete booking' 
      }, { status: 500 });
    }

    return NextResponse.json({
      message: 'Booking deleted successfully',
      deletedBooking: deleted[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}