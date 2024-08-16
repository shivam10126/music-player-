import React, { useEffect, useState, useRef } from 'react';
import { Slider, Skeleton } from 'antd';
import 'antd/dist/reset.css';
import { Howl } from 'howler';
import PauseIcon from '../assets/pause.svg';
import PreviousIcon from '../assets/previous.svg';
import RepeatIcon from '../assets/repeat.svg';
import ShuffleIcon from '../assets/random.svg';
import { PauseOutlined } from '@ant-design/icons';

const NowPlaying = ({ currentSong, playNext, playPrevious, setOrder, order }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [howl, setHowl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [repeat, setRepeat] = useState(false); // State to manage repeat mode
  const animationRef = useRef(null);

  useEffect(() => {
    if (currentSong) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      if (howl) {
        howl.stop();
        howl.unload();
      }

      const newHowl = new Howl({
        src: [currentSong.audio],
        html5: true,
        onplay: () => {
          setIsPlaying(true);
          updateProgress(); // Start updating the progress
        },
        onend: () => {
          if (repeat) {
            newHowl.seek(0);
            newHowl.play();
          } else {
            playNext();
          }
        }
      });

      setHowl(newHowl);
      setProgress(0);
      setIsPlaying(true); 
    }

    return () => {
      cancelAnimationFrame(animationRef.current); 
    };
  }, [currentSong]);

  const updateProgress = () => {
    if (howl && howl.playing()) {
      const seek = howl.seek();
      setProgress((seek / howl.duration()) * 100);
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  };

  const handlePlayPause = () => {
    if (!howl) return;

    if (isPlaying) {
      howl.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      howl.play();
      updateProgress(); 
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value) => {
    if (howl) {
      const newPosition = (value / 100) * howl.duration();
      howl.seek(newPosition);
      setProgress(value);
    }
  };

  const randomizeOrder = () => {
    if (!currentSong || !order) return;

    const currentIndex = order.indexOf(parseInt(currentSong.id) - 1);
    let remainingSongs = order.filter(index => index !== currentIndex);

    for (let i = remainingSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remainingSongs[i], remainingSongs[j]] = [remainingSongs[j], remainingSongs[i]];
    }

    const newOrder = [currentIndex, ...remainingSongs];
    setOrder(newOrder);
  };

  const toggleRepeat = () => {
    setRepeat(!repeat);
  };

  if (!currentSong) return null;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed right-5 bottom-0 h-[376px] mx-auto mb-5 p-5 w-[254px] bg-[#6b0000] text-white rounded-lg">
      <h3 className="text-[14px] text-center font-semibold mb-4">Now Playing</h3>
      {loading ? (
        <div className='flex flex-col justify-center align-middle items-center mb-4'>
          <Skeleton.Avatar active shape="square" size={118} className='mx-auto ' />
          <Skeleton.Input active size={20} className='mx-auto mt-4 ' />
          <Skeleton.Input active size={15} className='mx-auto mt-2' />
        </div>
      ) : (
        <div className="flex flex-col items-center  bg-[#6b0000]">
          <img 
            src={currentSong.image} 
            alt={currentSong.title} 
            className="object-contain object-center rounded-lg  w-full h-[150px]"
          />
          <div>
            <h4 className="text-[18px] text-[#F6F6F6] mt-4 text-center font-semibold">
              {truncateText(currentSong.title, 20)}
            </h4>
            <p className="text-[#CFC5C5] font-[400] text-[13px] text-center">{currentSong.artist}</p>
          </div>
        </div>
      )}

      {/* Slider */}
      <div className="mb-1 -mt-4">
        <Slider 
          value={progress}
          onChange={handleSliderChange}
          tooltip={{ open: false }}
          trackStyle={{ backgroundColor: '#F6F6F6' }}
          handleStyle={{ borderColor: '#F6F6F6' }}
          railStyle={{ backgroundColor: '#CFC5C5' }}
        />
        <div className="flex justify-between text-sm text-[#CFC5C5] mt-2">
          <span>{howl ? formatTime(howl.seek()) : '0:00'}</span>
          <span>{howl ? formatTime(howl.duration()) : '0:00'}</span>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center align-middle justify-center mb-4">
        <button 
          className={`rounded-lg hover:bg-red-800 p-2 ${repeat ? 'bg-red-800' : ''}`}
          onClick={toggleRepeat}
        >
          <img src={RepeatIcon} alt="Repeat" className="w-4 h-4"/>
        </button>
        <button className="ml-4 rounded-lg  p-2 hover:bg-red-800" onClick={playPrevious}>
          <img src={PreviousIcon} alt="Previous" className="w-5 h-5"/>
        </button>
        <button className="rounded-lg hover:bg-red-800 p-2 mx-" onClick={handlePlayPause}>
          {isPlaying ? <PauseOutlined className='text-2xl' /> : <img src={PauseIcon} alt="Play" className="w-6 h-6"/>}
        </button>
        <button className="rounded-lg mr-4 hover:bg-red-800 p-2" onClick={playNext}>
          <img src={PreviousIcon} alt="Next" className="w-5 h-5 -scale-x-100" />
        </button>
        <button className="rounded-lg hover:bg-red-800 p-2" onClick={randomizeOrder}>
          <img src={ShuffleIcon} alt="Shuffle" className="w-4  h-4"/>
        </button>
      </div>
    </div>
  );
};

export default NowPlaying;
