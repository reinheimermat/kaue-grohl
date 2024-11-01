import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

export interface Image {
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
  let allImages: Image[] = [];
  let nextCursor = null;

  try {
    do {
      const response = await cloudinary.v2.api.resources({
        resource_type: 'image',
        max_results: 500,
        next_cursor: nextCursor,
      });

      allImages = allImages.concat(response.resources);
      nextCursor = response.next_cursor;
    } while (nextCursor);

    return NextResponse.json({ images: allImages });
  } catch (error) {
    console.error('Erro ao buscar imagens:', error);
    return NextResponse.json({ message: 'Erro ao buscar imagens' }, { status: 500 });
  }
}
