import React, { useState } from "react";
import { v4 as uuid } from "uuid";
// import SongList from "./SongList";

function SongForm({ songList }) {
  const [songInfo, setSongInfo] = useState({
    id: uuid().slice(0, 8),
    song: "",
    artist: "",
    genre: "",
    rating: "",
  });

  const handleChange = (event) => {
    setSongInfo({
      ...songInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(songInfo);
    songList(songInfo);
    setSongInfo({
      id: uuid().slice(0, 8),
      song: "",
      artist: "",
      genre: "",
      rating: "",
    });
  };

  return (
    <div className="form-container">
      {/* <SongList song={songName} /> */}
      <h1>
        <span id="create-h1">Create</span> Your Playlist
      </h1>
      <form value="" onSubmit={handleSubmit}>
        <input
          name="song"
          type="text"
          value={songInfo.song}
          onChange={handleChange}
          placeholder="Song"
        />
        <input
          name="artist"
          type="text"
          value={songInfo.artist}
          onChange={handleChange}
          placeholder="Artist"
        />
        <input
          name="genre"
          type="text"
          value={songInfo.genre}
          onChange={handleChange}
          placeholder="Genre"
        />
        <input
          name="rating"
          type="number"
          value={songInfo.rating}
          onChange={handleChange}
          placeholder="Rating"
        />

        <button onClick={handleChange}>ADD</button>
      </form>
    </div>
  );
}

export default SongForm;
