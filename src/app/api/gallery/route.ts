import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const imageCameraDir = path.join(process.cwd(), 'public', 'image_camera');
  try {
    const files = fs.readdirSync(imageCameraDir);
    let cameraImages = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    
    // Find "Kota Tua Gambir" (ignoring extension just in case it's .jpeg instead of .jpg)
    const firstImageIndex = cameraImages.findIndex(file => file.toLowerCase().includes('kota tua gambir'));
    
    let firstImage = null;
    if (firstImageIndex !== -1) {
      firstImage = cameraImages.splice(firstImageIndex, 1)[0];
    }
    
    // Randomize the rest
    cameraImages = cameraImages.sort(() => Math.random() - 0.5);
    
    // Put "Kota Tua Gambir" back at the beginning
    if (firstImage) {
      cameraImages.unshift(firstImage);
    }
    
    return NextResponse.json({ images: cameraImages });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
