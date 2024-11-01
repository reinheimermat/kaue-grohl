// 'use client';

// import type { Image } from '@/app/api/cloudinary/images/route';
// import type { Video } from '@/app/api/cloudinary/videos/route';
// import { useEffect, useState } from 'react';

// export function Card() {
//     const [images, setImages] = useState<Video[]>([]);
//     const [videos, setVideos] = useState<Image[]>([]);

//     useEffect(() => {
//         async function fetchImages() {
//             try {
//                 const response = await fetch('/api/cloudinary/images');
//                 const data = await response.json();
//                 setImages(data.images);
//             } catch (error) {
//                 console.error('Erro ao buscar imagens:', error);
//             }
//         }

//         async function fetchVideos() {
//             try {
//                 const response = await fetch('/api/cloudinary/videos');
//                 const data = await response.json();
//                 setVideos(data.videos);
//             } catch (error) {
//                 console.error('Erro ao buscar vídeos:', error);
//             }
//         }

//         fetchImages();
//         fetchVideos();
//     }, []);

//     return (
//         <div>
//             <h1>Galeria de Imagens e Vídeos</h1>

//             <h2>Imagens</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
//                 {images.map((image) => (
//                     <div key={image.asset_id}>
//                         <img src={image.secure_url} alt={image.public_id} width="300" height="200" />
//                     </div>
//                 ))}
//             </div>

//             <h2>Vídeos</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
//                 {videos.map((video) => (
//                     <div key={video.asset_id}>
//                         {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
//                         <video width="300" height="200" controls>
//                             <source src={video.secure_url} type="video/mp4" />
//                             Seu navegador não suporta o elemento de vídeo.
//                         </video>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
