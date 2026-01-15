
import React, { useRef, useState } from 'react';

export const VSL: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      id="vsl-container" 
      onClick={togglePlay}
      className="relative w-full max-w-[400px] h-[550px] md:h-[700px] mx-auto rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)] mb-[2rem] border-[3px] border-white/20 animate-fadeInUp transition-transform duration-300 hover:-translate-y-[5px] cursor-pointer group"
      style={{ animationDelay: '0.5s' }}
    >
      <video 
        ref={videoRef}
        id="vsl-video" 
        className="w-full h-full object-cover block" 
        playsInline 
        disablePictureInPicture 
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source src="https://makerevenda.site/video/provamake.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] z-10">
          <div className="w-[80px] h-[80px] rounded-full bg-white/30 flex items-center justify-center border-2 border-white/50 animate-pulse">
            <i className="fas fa-play text-white text-3xl ml-1"></i>
          </div>
        </div>
      )}

      <div 
        id="progress-bar" 
        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-white to-[#ffe3f1] transition-[width] duration-100 linear shadow-[0_-2px_10px_rgba(255,255,255,0.3)] z-10"
        style={{ width: '100%' }}
      ></div>
    </div>
  );
};
