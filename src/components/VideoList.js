import React from 'react';
import {VideoItem} from "./index";

const VideoList = ({videos,onVideoSelect}) => {
    return (
        <>
            {
                videos.map((video,i)=>{
                    return <VideoItem
                        onVideoSelect={onVideoSelect}
                        video={video}
                        key={i}></VideoItem>
                })
            }
        </>
    );
};

export default VideoList;