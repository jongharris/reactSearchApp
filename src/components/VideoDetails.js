import React from 'react';
import './VideoDetail.css'

const VideoDetails = ({video}) => {

    if(!video) 
        return null;
    console.log(video);
    const vidSource = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div class = "videoDetail">
            <h1 className = "youtubeH1">{video.snippet.title}</h1>
            <div class = "videoPlayer">
                <iframe className = "videoPlayer" title = "Video" src = {vidSource}></iframe>
            </div>
            <h2 className = "youtubeH2"> Details </h2>
            <p className = "youtubeP"> {video.snippet.description}</p>
        </div>
    )
}

export default VideoDetails;