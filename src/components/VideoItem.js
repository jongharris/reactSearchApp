import React from 'react';
import './VideoItem.css'
const VideoItem = ({video, onSelect}) => {

   
    return (
        <div className = "videoCard" onClick = {() => {onSelect(video)}}>
            <p>{video.snippet.title}</p>
            <br/>
            <img src = {video.snippet.thumbnails.medium.url} alt = "Thumbnail" />
        </div>
    )
}

export default VideoItem;