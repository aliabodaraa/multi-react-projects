import React, { useEffect, useRef, useMemo } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

const StreamShow = (props) => {
  const videoRef=useRef();
  let {id,stream}=props;
  const playerPromise=useRef();
  useEffect(()=>{
    console.log(playerPromise)
      if(videoRef.current && playerPromise.current){
        playerPromise.current.then((player)=>{//_mediaElement
          player.attachMediaElement(videoRef.current);
          player.unload();
          player.load();
        });
      }
  });
  useEffect(()=>{
    playerPromise.current=(async()=>{//we use Memoized to access the playerPromise when unMount this component
      console.log(10);
      let ply=await flv.createPlayer({
          type: 'flv',
          url: `http://localhost:8000/live/${id}.flv`
      });
      return ply;})();//we use memo to avoid recreate plyer in unnecessary rerenders
     props.fetchStream(id);
     return ()=>{
      if(playerPromise.current)
       playerPromise.current.then((player)=>{
        console.log("destroy")
       player.destroy();
      });
     };
  },[]);
  if(stream){
    return( 
      <div>
        <video ref={videoRef} style={{ width: '100%' }} controls />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
        </div>)
};
};
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.id] };
};
export default connect(mapStateToProps,{fetchStream})(StreamShow);

//With Class Components
//  import React from 'react';
//  import flv from 'flv.js';
//  import { connect } from 'react-redux';
//  import { fetchStream } from '../../actions';

//  class StreamShow extends React.Component {
//    constructor(props) {
//      super(props);

//      this.videoRef = React.createRef();
//    }

//    componentDidMount() {
//      const { id } = this.props.fetchStream(this.props.id);;

//      this.props.fetchStream(id);
//      this.buildPlayer();
//    }

//    componentDidUpdate() {
//      this.buildPlayer();
//    }
//    componentWillUnmount(){
//      this.player.destroy();
//    }

//    buildPlayer() {
//      if (this.player || !this.props.stream) {
//        return;
//      }

//      const { id } = this.props;
//      this.player = flv.createPlayer({
//        type: 'flv',
//        url: `http://localhost:8000/live/${id}.flv`
//      });
//      this.player.attachMediaElement(this.videoRef.current);
//      this.player.load();
//    }

//    render() {
//      if (!this.props.stream) {
//        return <div>Loading...</div>;
//      }

//      const { title, description } = this.props.stream;

//      return (
//        <div>
//          <video ref={this.videoRef} style={{ width: '100%' }} controls />
//          <h1>{title}</h1>
//          <h5>{description}</h5>
//        </div>
//      );
//    }
//  }

//  const mapStateToProps = (state, ownProps) => {
//    return { stream: state.streams[ownProps.id] };
//  };

//  export default connect(
//    mapStateToProps,
//    { fetchStream }
//  )(StreamShow);
