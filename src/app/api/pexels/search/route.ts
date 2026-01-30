import { NextResponse } from 'next/server';

// Simple in-memory cache
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || 'security camera';
    const perPage = searchParams.get('per_page') || '10';
    const page = searchParams.get('page') || '1';

    const cacheKey = `${query}-${perPage}-${page}`;

    // Check cache
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        return NextResponse.json(cached.data);
    }

    try {
        const response = await fetch(
            `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`,
            {
                headers: {
                    Authorization: process.env.PEXELS_API_KEY || '',
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch from Pexels API');
        }

        const data = await response.json();

        // Store in cache
        cache.set(cacheKey, { data, timestamp: Date.now() });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Pexels API Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch images' },
            { status: 500 }
        );
    }
}
