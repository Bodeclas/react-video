import React from 'react';
import Media from './media.js';
import './playlist.css';
/* import Play from '../../icons/components/play';
import Volume from '../../icons/components/volume';
import FullScreen from '../../icons/components/full-screen';
import Pause from '../../icons/components/pause'; */

function Playlist(props) {
  const playlist = props.data.categories[0].playlist
  console.log(props.data);
  return (
    <div className="Playlist">
      {
        playlist.map((item) => {
          return <Media
            { ...item } key={item.id}
          />
        })
      }
    </div>
  )
}

export default Playlist;