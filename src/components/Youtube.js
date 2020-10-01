import React from 'react';
import VideoItem from './VideoItem'
import './youtube.css';
import VideoDetails from './VideoDetails';
const Youtube = ({data, onSelect, video}) => {
    
    //Map over the data to create individual card items
    const renderedList = data.map((item, index) => {

        //pass back the first video found
        return (
            <VideoItem key = {item.id.videoId}  video = {item} onSelect={onSelect}/>
        )
    })
    
    return (
        <div className = "youtube">
            <div className = "left-half">
                <VideoDetails video = {video}/>
            </div>
            <div class = "right-half">
                {renderedList}
            </div>
            
        </div>
    )
};

export default Youtube;