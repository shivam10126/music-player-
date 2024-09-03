import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ArtistSection from './components/ArtistSection';
import SongList from './components/SongList';
import NowPlaying from './components/NowPlaying';
import songUrl from './assets/04 Beat It.mp3';

function App() {

  const songs = [
    {
      id: `1`,
      title: 'Billie Jean',
      playCount: '1,040,811,084',
      duration: '4:53',
      album: 'Thriller 25 Super Deluxe Edition',
      image: 'https://i.scdn.co/image/ab67616d0000b2739eb690cb054df293fe7711b8',
      audio:songUrl,
      artist:'Michael Jackson',
    },
    {
      id: `2`,
      title: 'Beat It',
      playCount: '643,786,045',
      duration: '4:18',
      album: 'Thriller 25 Super Deluxe Edition',
      image: 'https://i1.sndcdn.com/artworks-000329038545-d554xk-t500x500.jpg',
      audio:songUrl,
      artist:'Michael Jackson',
    },
    {
      id: `3`,
      title: 'Smooth Criminal - 2012 Remaster',
      playCount: '407,234,004',
      duration: '4:17',
      album: 'Thriller 25 Super Deluxe Edition',
      image: 'https://i1.sndcdn.com/artworks-T4iQz4govIM7-0-t500x500.jpg',
      audio:songUrl,
      artist:'Michael Jackson',
    },
    {
      id: `4`,
      title: 'Don\'t Stop \'Til You Get Enough',
      playCount: '316,391,952',
      duration: '6:05',
      album: 'Bad 25th Anniversary Edition',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRACox2pZKD9eBnGXXWOHRO7O5ZXYB_-ZvA&s',
      audio:songUrl,
      artist:'Michael Jackson',
    },
    {
      id: `5`,
      title: 'Rock With You - Single Version',
      playCount: '268,187,218',
      duration: '3:40',
      album: 'Off The Wall',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6FqEr0p_uR760fuI8UyomfC92ihENufl_Q&s',
      audio:songUrl,
      artist:'Michael Jackson',
    },
  ];

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [order, setOrder] = useState([0,1,2,3,4]);


  const playNext = () => {
    const currentIndex = order.indexOf(songs.findIndex(song => song.id === currentSong.id));
    const nextIndex = (currentIndex + 1) % order.length;
    setCurrentSong(songs[order[nextIndex]]);
  };

  const playPrevious = () => {
    const currentIndex = order.indexOf(songs.findIndex(song => song.id === currentSong.id));
    const previousIndex = (currentIndex - 1 + order.length) % order.length;
    setCurrentSong(songs[order[previousIndex]]);
  };




  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-auto bg-gray-800 py-10 text-white"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #4a0000, #0a0909)',
      }}>
        <Header />
        <ArtistSection />
        <SongList currentSong={currentSong} setCurrentSong={setCurrentSong} initialSongs={songs} setOrder={setOrder} />
      </div>
      <div className='w-[300px] min-h-full'
      style={{
        backgroundImage: 'linear-gradient(to bottom, #250808, #0f0c0c)',
      }}>
        <NowPlaying songs={songs} 
        order={order} 
        currentSong={currentSong} 
        setOrder={setOrder} 
        playNext={playNext} 
        playPrevious={playPrevious}  
        />
      </div>
    </div>
  );
}

export default App;
