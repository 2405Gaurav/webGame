import React, { useRef, useState } from 'react';

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 3;

  const nextVideoRef = useRef(null);
  const upcomingIndex = (currentIndex % totalVideos) + 1;

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingIndex);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* Video Frame Wrapper */}
      <div id="Video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-100">
        
        {/* Mini Player Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="mask-clip-path size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSrc(currentIndex + 1)}
                loop
                muted
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
        </div>

        {/* Transition Video Layer */}
        {/* <video
          ref={nextVideoRef}
          src={getVideoSrc(upcomingIndex)}
          loop
          muted
          id="next-video"
          className={`absolute z-20 size-64 object-cover object-center transition-opacity duration-500 ${
            hasClicked ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleVideoLoad}
        /> */}

        {/* Main Fullscreen Video */}
        <video
          key={currentIndex}
          src={getVideoSrc(currentIndex)}
          autoPlay
          muted
          loop
          className="absolute left-0 right-0 size-full object-cover object-center z-0"
          onLoadedData={handleVideoLoad}
        />
      </div>
        <h1 className='hero-heading special-font absolute bottom-5 z-40 text-blue-100 right-5 '>
          g<b>a</b>ming
        </h1>
        <div className='absolute left-0 top-0 z-40 size-full '>
          <div className='mt-24 px-5  sm:px-10 '>
            <h1 className='special-font hero-heading text-blue-200'>redefi<b>n</b>e</h1>
            <p className='mb-5 max-w-64 font-robert-regular text-blue-200'>Enter The Metagame Layer <br />Unleash the play economy </p>
          </div>
        </div>
    </div>
  );
}

export default Hero;
