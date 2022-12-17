import React from "react";

function SongList({ list }) {
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <table className="song-table-list">
            <tbody className="song-head">
              <tr>
                <td className="song-data">{item.song}</td>
                <td className="song-data">{item.artist}</td>
                <td className="song-data">{item.genre}</td>
                <td className="song-data">{item.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default SongList;
