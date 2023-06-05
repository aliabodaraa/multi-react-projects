import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';
const StreamShow = (props) => {
  const videoRef=useRef();
  let player=null;
  let {id,stream}=props;

  useEffect(()=>{  console.log("first useEffect");
      props.fetchStream(id);
  },[]);

  useEffect(()=>{  console.log("second useEffect");
    buildPlayer();
  });

  const buildPlayer=()=> {
    if(player)
      console.log("player");
    if(!stream)
      console.log("try to access buildPlayer without stream");      
    if (player || !stream) return;
    console.log("create player");      
    player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    player.attachMediaElement(videoRef.current);
    player.load();
    console.log(videoRef);
  }

  if(stream){console.log("return");
    return( 
      <div>
        <video ref={videoRef} style={{ width: '100%' }} controls />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  }else
    return <>Loading ...</>
};

const mapStateToProps=(state,ownProps)=>{
    console.log("mapStateToProps");
    return {stream:state.streams[ownProps.id]};
};

export default connect(mapStateToProps,{fetchStream})(StreamShow);

//With Class Components
// import React from 'react';
// import flv from 'flv.js';
// import { connect } from 'react-redux';
// import { fetchStream } from '../../actions';

// class StreamShow extends React.Component {
//   constructor(props) {
//     super(props);

//     this.videoRef = React.createRef();
//   }

//   componentDidMount() {
//     const { id } = this.props.fetchStream(this.props.id);;

//     this.props.fetchStream(id);
//     this.buildPlayer();
//   }

//   componentDidUpdate() {
//     this.buildPlayer();
//   }

//   buildPlayer() {
//     if (this.player || !this.props.stream) {
//       return;
//     }

//     const { id } = this.props;
//     this.player = flv.createPlayer({
//       type: 'flv',
//       url: `http://localhost:8000/live/${id}.flv`
//     });
//     this.player.attachMediaElement(this.videoRef.current);
//     this.player.load();
//   }

//   render() {
//     if (!this.props.stream) {
//       return <div>Loading...</div>;
//     }

//     const { title, description } = this.props.stream;

//     return (
//       <div>
//         <video ref={this.videoRef} style={{ width: '100%' }} controls />
//         <h1>{title}</h1>
//         <h5>{description}</h5>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   return { stream: state.streams[ownProps.id] };
// };

// export default connect(
//   mapStateToProps,
//   { fetchStream }
// )(StreamShow);
