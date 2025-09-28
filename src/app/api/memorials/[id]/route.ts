import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { memorials } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const memorial = await db.select()
      .from(memorials)
      .where(eq(memorials.id, parseInt(id)))
      .limit(1);

    if (memorial.length === 0) {
      return NextResponse.json({ 
        error: 'Memorial not found' 
      }, { status: 404 });
    }

    return NextResponse.json(memorial[0], { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const body = await request.json();
    const { title, description, coverImageUrl, personName, dateOfBirth, dateOfPassing, notes } = body;

    // Validate required fields if provided
    if (title !== undefined && (!title || title.trim().length === 0)) {
      return NextResponse.json({ 
        error: "Title cannot be empty",
        code: "INVALID_TITLE" 
      }, { status: 400 });
    }

    if (personName !== undefined && (!personName || personName.trim().length === 0)) {
      return NextResponse.json({ 
        error: "Person name cannot be empty",
        code: "INVALID_PERSON_NAME" 
      }, { status: 400 });
    }

    // Check if memorial exists
    const existingMemorial = await db.select()
      .from(memorials)
      .where(eq(memorials.id, parseInt(id)))
      .limit(1);

    if (existingMemorial.length === 0) {
      return NextResponse.json({ 
        error: 'Memorial not found' 
      }, { status: 404 });
    }

    // Prepare update data
    const updateData: any = {
      updatedAt: Date.now()
    };

    if (title !== undefined) updateData.title = title.trim();
    if (description !== undefined) updateData.description = description;
    if (coverImageUrl !== undefined) updateData.coverImageUrl = coverImageUrl;
    if (personName !== undefined) updateData.personName = personName.trim();
    if (dateOfBirth !== undefined) updateData.dateOfBirth = dateOfBirth;
    if (dateOfPassing !== undefined) updateData.dateOfPassing = dateOfPassing;

    const updated = await db.update(memorials)
      .set(updateData)
      .where(eq(memorials.id, parseInt(id)))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json({ 
        error: 'Memorial not found' 
      }, { status: 404 });
    }

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if memorial exists before deleting
    const existingMemorial = await db.select()
      .from(memorials)
      .where(eq(memorials.id, parseInt(id)))
      .limit(1);

    if (existingMemorial.length === 0) {
      return NextResponse.json({ 
        error: 'Memorial not found' 
      }, { status: 404 });
    }

    const deleted = await db.delete(memorials)
      .where(eq(memorials.id, parseInt(id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json({ 
        error: 'Memorial not found' 
      }, { status: 404 });
    }

    return NextResponse.json({
      message: 'Memorial deleted successfully',
      memorial: deleted[0]
    }, { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}