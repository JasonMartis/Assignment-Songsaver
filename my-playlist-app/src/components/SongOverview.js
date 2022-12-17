import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

const initialState = [{ id: 1, song: "", artist: "", genre: "", rating: "" }];

function SongOverview() {
  const [list, updateList] = useState(initialState);

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
