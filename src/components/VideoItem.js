import React from "react";
import './VideoItem.css';
export default class VideoItem extends React.Component {
    constructor(props) {
            super(props);
            this.imageRef = React.createRef();
            this.state = { spans: 0 }
        }
        // componentDidMount(){
        //     console.log(this.imageRef.current.clientHeight);//if you get 0 then add event listenser `load` event
        //     const height = this.imageRef.current.clientHeight;
        //     const spans = Math.ceil((height/10) +1);
        //     this.setState({spans});//abbreviation of setState this.setState({spans:spans});
        // }
    render() {
        return (
            <div className="video-item item">
                <img className="ui image" src = { this.props.video.snippet.thumbnails.medium.url } alt = {this.props.video.snippet.title}  onClick={()=>this.props.onVideoSelected(this.props.video)} />
                <div className="content">
                    <div className="header">
                        { this.props.video.snippet.title }
                    </div>
                </div>
            </div>
        );
    };
}