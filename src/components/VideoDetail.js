const VidoDetail = ({video}) => {
    if(!video) return <div>sssssssssssssLoading ...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title="videoPlayer" src={videoSrc} frameborder="0"></iframe>
            </div>
        <div className="ui sedment">
            <h4 className="ui header">
                {video.snippet.title}
            </h4>
            <p>{video.snippet.description}</p>
        </div>
        </div>
     );
}
 
export default VidoDetail;