import React, { useEffect, useRef, useMemo,useState, useCallback } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

const StreamShow = (props) => {
  const flvInstance=React.useRef();
  const [enterOne, setEnterOne] = useState(false);
  const videoRef=useRef(null);
  const [videoStateRef]=React.useState(videoRef);//state variable reference to ref whenever ref change the state will change also
  let {id,stream}=props;
  let createFlvInstance=async()=>{
      console.log("[[[createFlvInstance[[");
      let ply=await flv.createPlayer({
          type: 'flv',
          url: `http://localhost:8000/live/${id}.flv`
      });
      flvInstance.current=ply;
    }
  const getFlvInstance=useCallback(createFlvInstance,[id]);
  let loadFlvInstance=async()=>{
    console.log("loadFlvInstance");
    console.log(videoStateRef.current,videoRef.current)
    await getFlvInstance();//or you can call `createFlvInstance` still waiting for make the flvInstance
    flvInstance.current.detachMediaElement(videoRef.current);
    flvInstance.current.attachMediaElement(videoRef.current);
    flvInstance.current.unload();
    flvInstance.current.load();
  }
const player=useCallback(loadFlvInstance,[videoRef.current]);//whenever you come to this page look into this callback if it match the previous one then avoid to recall it get the previous one, if doesn't match recall it
  useEffect(()=>{
    props.fetchStream(id);
    return ()=>{
        if(flvInstance.current){
          flvInstance.current.destroy();
          console.log("destroy");
        }
    };
 },[]);
  useEffect(() => {
    if (videoRef.current && !enterOne) {//skip enter the if for first render
      setEnterOne(true);
      console.log("enter",videoRef.current);
      player();//or
      // (async()=>{await getFlvInstance();
      //   console.log(flvInstance);
      //   await flvInstance.current.attachMediaElement(videoRef.current);
      //   flvInstance.current.unload();
      //   flvInstance.current.load();})();//or you can call `createFlvInstance` still waiting for make the flvInstance
    }
  });
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