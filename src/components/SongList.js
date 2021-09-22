import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "Memory gosple", id: 2 },
    { title: "This wild darkness", id: 3 }
  ]);
  const [age, setAge] = useState(20);
  const handleAge = () => {
    setAge(age + 1);
  };
  const addSong = title => {
    handleAge();
    setSongs([...songs, { title, id: age }]);
  };
  useEffect(() => {
    console.log("useeEffect hooks", songs);
  }, [songs]);
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={handleAge}>Add one to age {age}</button>
    </div>
  );
};
export default SongList;
