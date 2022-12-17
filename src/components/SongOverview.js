import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

const initialState = [{ id: 1, song: "", artist: "", genre: "", rating: "" }];
const initialSongState = [
  { id: 2, song: "One", artist: "Metallica", genre: "Metal", rating: "5" },
  {
    id: 3,
    song: "The Rock Show",
    artist: "Blink 182",
    genre: "Punk",
    rating: "4",
  },
  {
    id: 4,
    song: "Back in Black",
    artist: "AC/DC",
    genre: "Rock",
    rating: "3",
  },
  {
    id: 5,
    song: "The Trooper",
    artist: "Iron Maiden",
    genre: "Metal",
    rating: "5",
  },
  {
    id: 6,
    song: "Perry Mason",
    artist: "Ozzy Osbourne",
    genre: "Metal",
    rating: "3",
  },
  {
    id: 7,
    song: "Self-Esteem",
    artist: "The Offspring",
    genre: "Punk",
    rating: "4",
  },
];

function SongOverview() {
  const [list, updateList] = useState(initialSongState);

  const songList = (item) => {
    updateList([...list, item]);
  };
  console.log(list);

  // const [data, setData] = useState([{ list }]);

  const handleDelete = () => {
    console.log(updateList);
    return updateList(initialState);
  };

  return (
    <div>
      <SongForm songList={songList} />
      <table className="song-table">
        <thead className="song-head">
          <tr>
            <th className="song-header">Song</th>
            <th className="song-header">Artist</th>
            <th className="song-header">Genre</th>
            <th className="song-header">Rating</th>
          </tr>
        </thead>
      </table>
      <SongList list={list} />
      <div className="remove-button">
        <button onClick={() => handleDelete()}>Remove My Playlist</button>
      </div>
    </div>
  );
}

export default SongOverview;
