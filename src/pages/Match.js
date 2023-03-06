import React, { useState } from 'react';
import './VideoGallery.css';
import Menu from './Menu';
import Footer from './Footer';

const videoData = [
  {
    id: 1,
    title: 'Lesson 1: learn how to greet people in Arabic',
    src: 'assets/video.mp4'
  },
  {
    id: 2,
    title: 'Lesson 2: learn how to greet people in Arabic',
    src: 'assets/video.mp4'
  },
  {
    id: 3,
    title: 'Lesson 3: talking how you feel today ',
    src: 'assets/video.mp4'
  },
  {
    id: 4,
    title: 'Lesson 4: Arabic Pronouns  ',
    src: 'assets/video.mp4'
  },
  {
    id: 5,
    title: 'Lesson 5: Learn to talk and describe about people ',
    src: 'assets/video.mp4'
  },
  {
    id: 6,
    title: 'Lesson 6: Dual & Plural Personal Pronouns ',
    src: 'assets/video.mp4'
  },
  {
    id: 7,
    title: 'Lesson 7: Learn Professions in Arabic ',
    src: 'assets/video.mp4'
  },
  {
    id: 8,
    title: 'Lesson 8: Learn Numbers in Arabic 0 to 10 ',
    src: 'assets/video.mp4'
  },
 
];

function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  return (
    <section id="herol">
        <div className='hero2'>
        <Menu/>
        </div>
        
    <div className="video-gallery">
      <div className="video-player">
        <h1 className="video-title">{currentVideo.title}</h1>
        <video width="100%" controls>
          <source src={currentVideo.src} type="video/mp4" />
        </video>
      </div>
      <div className="video-list">
        {videoData.map(video => (
          <button 
            key={video.id} 
            onClick={() => setCurrentVideo(video)}
            className={`video-list-item ${currentVideo.id === video.id ? 'active' : ''}`}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
    <div className='footerl'>
    <Footer/>
    </div>
    </section>
  );
}

export default VideoGallery;