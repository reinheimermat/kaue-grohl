import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

export interface Video {
    asset_id: string;
    public_id: string;
    secure_url: string;
}

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  let allVideos: Video[] = [];
  let nextCursor = null;

  try {
    do {
      const response = await cloudinary.v2.api.resources({
        resource_type: 'video',
        max_results: 500,
        next_cursor: nextCursor,
      });

      allVideos = allVideos.concat(response.resources);
      nextCursor = response.next_cursor;
    } while (nextCursor);

    return NextResponse.json({ videos: allVideos });
  } catch (error) {
    console.error('Erro ao buscar vídeos:', error);
    return NextResponse.json({ message: 'Erro ao buscar vídeos' }, { status: 500 });
  }
}
