import { useEffect, useRef } from 'react';

const videos = [
  '/dark-cinematic.mp4',
  '/koi-fish.mp4',
  '/dna-chain.mp4',
  '/woman-sculpt.mp4',
  '/cityscape.mp4',
  '/astronaut.mp4',
];

export default function VideoBackground() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Ensure all videos play
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch((err) => {
          console.log('Video autoplay failed:', err);
        });
      }
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <div className="grid grid-cols-3 grid-rows-2 w-full h-full">
        {videos.map((src, index) => (
          <div key={index} className="relative w-full h-full overflow-hidden">
            <video
              ref={(el) => { videoRefs.current[index] = el; }}
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: 'brightness(0.4) contrast(1.1)',
              }}
              onError={(e) => console.log('Video error:', src, e)}
            />
          </div>
        ))}
      </div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}

