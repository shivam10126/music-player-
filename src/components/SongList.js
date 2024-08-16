import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Playing from "../assets/Playing.svg";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const SortableItem = ({ song, index, isActive, onClick }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: song.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className={`hover:bg-[#520000] hover:text-[#F6F6F6] border-l-8 hover:border-[#CA0000] cursor-pointer ${isActive ? 'bg-[#520000] text-[#F6F6F6] border-[#CA0000]' : 'border-transparent'}`}
    >
      <td className="py-4 pl-[5rem] pr-2 w-14">
        {isActive ? <img src={Playing} alt="Playing" className="w-5 h-5" /> : index + 1}
      </td>
      <td className="py-4 w-14"><img src={song.image} alt={song.title} className="w-10 h-10 mr-2 object-cover rounded" /></td>
      <td className="py-4 w-[280px]">{truncateText(song.title, 26)}</td>
      <td className="py-4">{song.playCount}</td>
      <td className="py-4">{song.duration}</td>
      <td className="py-4">{truncateText(song.album, 16)}</td>
    </tr>
  );
};

const SongList = ({ initialSongs, setOrder, setCurrentSong, currentSong }) => {
  const [songs, setSongs] = useState(initialSongs);

  const handleDragEnd = (event) => {
    const { active, over } = event;
  
    if (!over) return; 
  
    if (active.id !== over.id) {
      const oldIndex = songs.findIndex(song => song.id === active.id);
      const newIndex = songs.findIndex(song => song.id === over.id);
  
      if (oldIndex !== -1 && newIndex !== -1) {
        const newSongsOrder = arrayMove(songs, oldIndex, newIndex);
        setSongs(newSongsOrder);
  
        const newOrder = newSongsOrder.map(song => parseInt(song.id, 10)); 
        setOrder(newOrder);
      }
    }
  };

  return (
    <div className="mb-10 mt-10 mx-auto w-[95%]">
      <h2 className="text-2xl font-bold mb-5 pl-[5rem]">Popular</h2>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={songs} strategy={verticalListSortingStrategy}>
          <table className="w-full text-[#CFC5C5] font-semibold">
            <thead>
              <tr className="text-left mx-[5rem] font-semibold">
                <th className="pb-4 pl-[5rem] pr-6 w-14">#</th>
                <th className="pb-4 w-14"></th>
                <th className="pb-4">TITLE</th>
                <th className="pb-4">PLAYING</th>
                <th className="pb-4">TIME</th>
                <th className="pb-4 translate-x-16">ALBUM</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song, index) => (
                <SortableItem 
                  key={song.id} 
                  song={song} 
                  index={index} 
                  isActive={currentSong.id === song.id}
                  onClick={() => setCurrentSong(song)} 
                />
              ))}
            </tbody>
          </table>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default SongList;
