import { db } from '@/db';
import { memorials } from '@/db/schema';

async function main() {
    const sampleMemorials = [
        {
            title: 'In Loving Memory of Ramesh Kumar Sharma',
            description: 'A devoted father, loving husband, and cherished grandfather. Ramesh lived his life with unwavering integrity and kindness. He was a retired school principal who touched countless lives through his dedication to education. His warm smile and generous heart will be remembered by all who knew him. May his soul rest in eternal peace.',
            coverImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
            personName: 'Ramesh Kumar Sharma',
            dateOfBirth: new Date('1938-03-15').getTime(),
            dateOfPassing: new Date('2024-01-08').getTime(),
            createdAt: new Date('2024-01-10').getTime(),
            updatedAt: new Date('2024-01-10').getTime(),
            createdBy: null,
        },
        {
            title: 'Celebrating the Life of Dr. Priya Nair',
            description: 'Dr. Priya Nair was a compassionate physician who dedicated her life to healing others. Her patients knew her for her gentle bedside manner and her colleagues respected her medical expertise. Beyond medicine, she was an avid classical dancer and mentor to young artists. She leaves behind a legacy of service and grace.',
            coverImageUrl: null,
            personName: 'Dr. Priya Nair',
            dateOfBirth: new Date('1947-07-22').getTime(),
            dateOfPassing: new Date('2024-01-15').getTime(),
            createdAt: new Date('2024-01-17').getTime(),
            updatedAt: new Date('2024-01-17').getTime(),
            createdBy: null,
        },
        {
            title: 'Forever in Our Hearts - Suresh Patel',
            description: 'Suresh was the heart of our family and the pillar of our community. As a successful businessman, he always gave back to society and helped countless families in need. His laughter was infectious, and his wisdom guided us through life\'s challenges.',
            coverImageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop',
            personName: 'Suresh Patel',
            dateOfBirth: new Date('1943-11-08').getTime(),
            dateOfPassing: new Date('2024-01-22').getTime(),
            createdAt: new Date('2024-01-24').getTime(),
            updatedAt: new Date('2024-01-24').getTime(),
            createdBy: null,
        },
        {
            title: 'Remembering Kamala Devi Gupta',
            description: 'A loving mother of four and grandmother of eight, Kamala Devi lived a life of devotion and service. She was known in the neighborhood for her delicious cooking and open door policy. Her spiritual strength and positive outlook on life inspired everyone around her. Though she is no longer with us, her love continues to guide our family.',
            coverImageUrl: null,
            personName: 'Kamala Devi Gupta',
            dateOfBirth: new Date('1941-05-30').getTime(),
            dateOfPassing: new Date('2024-02-01').getTime(),
            createdAt: new Date('2024-02-03').getTime(),
            updatedAt: new Date('2024-02-03').getTime(),
            createdBy: null,
        },
        {
            title: 'In Memory of Arjun Singh Rajput',
            description: 'Colonel Arjun Singh Rajput served our nation with honor and distinction for over three decades. After retirement, he devoted himself to social work and youth development programs. His courage, discipline, and patriotism will always be remembered. He was a true gentleman and a hero in every sense.',
            coverImageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop',
            personName: 'Arjun Singh Rajput',
            dateOfBirth: new Date('1939-12-14').getTime(),
            dateOfPassing: new Date('2024-02-08').getTime(),
            createdAt: new Date('2024-02-10').getTime(),
            updatedAt: new Date('2024-02-10').getTime(),
            createdBy: null,
        },
    ];

    await db.insert(memorials).values(sampleMemorials);
    
    console.log('✅ Memorials seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});