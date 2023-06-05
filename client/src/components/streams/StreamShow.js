import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
const StreamShow = (props) => {
  useEffect(()=>{
      props.fetchStream(props.id);
  },[]);
  if(props.stream)
    return( 
    <div>
      <h1>{props.stream.title}</h1>
      <h5>{props.stream.description}</h5>
    </div>
    );
  else
    return <>Loading ...</>

};
const mapStateToProps=(state,ownProps)=>{
    return {stream:state.streams[ownProps.id]};
};

export default connect(mapStateToProps,{fetchStream})(StreamShow);
