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
      image: 'https://s3-alpha-sig.figma.com/img/fab5/7d37/dac780b3d02d707441f0334cbb22d318?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AtkrpEwRVP32kRLtXkmOuLNS7-ObSjhRuUsjxf9pnD4nTa~kPQ25nkfrofnuVeVBNOkSrbT~U8fhmG-IhumkFkxzDj39M5jea7aukikuyD8OxIv~FCa02uj2myx9G2X1G~xguHnze1IrGw1OFmmopbqO6niaWePT5snm3~whRFqXovtTjLD8gNJUx8~Ot9BQwELtZCzpU73O2f-KMQuew3JgSYYOaRcoo29Bs4OFkYS4qEz5ciixqmOOKsjdUiZVJ-r08Lvffx7JySug-IYO65yUqaziTwzabXeLRwHIzXGBgHL7N3TVE-EYlxAIdRXUAxdFVNd1vHrkMiv1ANxQpw__',
      audio:songUrl,
      artist:'Michael Jackson',
    },
    {
      id: `2`,
      title: 'Beat It',
      playCount: '643,786,045',
      duration: '4:18',
      album: 'Thriller 25 Super Deluxe Edition',
      image: 'https://s3-alpha-sig.figma.com/img/fab5/7d37/dac780b3d02d707441f0334cbb22d318?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AtkrpEwRVP32kRLtXkmOuLNS7-ObSjhRuUsjxf9pnD4nTa~kPQ25nkfrofnuVeVBNOkSrbT~U8fhmG-IhumkFkxzDj39M5jea7aukikuyD8OxIv~FCa02uj2myx9G2X1G~xguHnze1IrGw1OFmmopbqO6niaWePT5snm3~whRFqXovtTjLD8gNJUx8~Ot9BQwELtZCzpU73O2f-KMQuew3JgSYYOaRcoo29Bs4OFkYS4qEz5ciixqmOOKsjdUiZVJ-r08Lvffx7JySug-IYO65yUqaziTwzabXeLRwHIzXGBgHL7N3TVE-EYlxAIdRXUAxdFVNd1vHrkMiv1ANxQpw__',
      audio:songUrl,
      artist:'Michael Jackson',
    },
    {
      id: `3`,
      title: 'Smooth Criminal - 2012 Remaster',
      playCount: '407,234,004',
      duration: '4:17',
      album: 'Thriller 25 Super Deluxe Edition',
      image: 'https://s3-alpha-sig.figma.com/img/b185/465f/8a5d6c233b76e53e0eea65bc21738d6b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hhN-gXGgH42GznJURQ2bx8dYE2jBkqN9u1eIjWSVsrK7a7z-p5mlxMdUZCxEGlOF5T0RINoTxWLYYa~B9IfnSNVsAIHqFUKTFCIcfqYKn--86o5xRJ6F0NYqxdaXF6~zzY3qQu2tWGG6I8KSs7cLFAM8gMx9amq651cS7nJSAj3jOBnDDVKt~9P0Lk0b8nbuPyK9LvH4fIR-n2F3TQOCu4SnTrlDA6inksj~YnPyFEhEbgBW8OPVpwf6zd6a6fSE6LFvAEeLlDhqDtfsUIGG-CfjJLF5fXmlB1K5CHJqsTuFyb46bPyqk1sIdkHsCU7kkL9f2JRjBli4vYRKFpdvyw__',
      audio:songUrl,
      artist:'Michael Jackson',
    },
    {
      id: `4`,
      title: 'Don\'t Stop \'Til You Get Enough',
      playCount: '316,391,952',
      duration: '6:05',
      album: 'Bad 25th Anniversary Edition',
      image: 'https://s3-alpha-sig.figma.com/img/0125/de17/5e419f447d656fefcf56c79444973408?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gt2Y6Rw2F7RDuuyxbT-v2aJhHGax7Xpdysmv36Sy4F8e~UsWoXNwdO0vtVvN6oICFkdOmMvzc2vtIYJScvUZG0VV-e5u0r62dq644u7xs0dUiADx5S6GBTuBXOaXDa40Tj~lu9DeEaJv7~p-xVu77ahMAGuafxNcVEQNaKRaHa0ArA9IppFKW0GeIX3BgSwPupxrdLNBnIZPUO2TMZfo1EnaCNySyxgu5SXJZJUTpP6F~Xhwx2h1x7vwaOMLJZE9uxMprUAoufl4q3i-lzbY8I14Gs~0v3gAy15Yw06hzrjqzzyEoId8-5fpoivr4UASWz2negvevMWd-b-Wgry7Ew__',
      audio:songUrl,
      artist:'Michael Jackson',
    },
    {
      id: `5`,
      title: 'Rock With You - Single Version',
      playCount: '268,187,218',
      duration: '3:40',
      album: 'Off The Wall',
      image: 'https://s3-alpha-sig.figma.com/img/0125/de17/5e419f447d656fefcf56c79444973408?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gt2Y6Rw2F7RDuuyxbT-v2aJhHGax7Xpdysmv36Sy4F8e~UsWoXNwdO0vtVvN6oICFkdOmMvzc2vtIYJScvUZG0VV-e5u0r62dq644u7xs0dUiADx5S6GBTuBXOaXDa40Tj~lu9DeEaJv7~p-xVu77ahMAGuafxNcVEQNaKRaHa0ArA9IppFKW0GeIX3BgSwPupxrdLNBnIZPUO2TMZfo1EnaCNySyxgu5SXJZJUTpP6F~Xhwx2h1x7vwaOMLJZE9uxMprUAoufl4q3i-lzbY8I14Gs~0v3gAy15Yw06hzrjqzzyEoId8-5fpoivr4UASWz2negvevMWd-b-Wgry7Ew__',
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
