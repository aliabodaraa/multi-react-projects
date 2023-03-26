//import React from "react";
import VideoItem from "./VideoItem"
const VideoList = ({videos,onVideoSelected}) => {
    console.log(videos)
    const videosVar=videos.map((video,ind)=>{
        return <VideoItem key={ind} video={video} onVideoSelected={onVideoSelected}/>
    })
    return (<div className="images-list">{videosVar}</div>);
}
 
export default VideoList;