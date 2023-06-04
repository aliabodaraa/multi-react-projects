import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
const StreamEdit = (props) => {
  console.log(props);
  useEffect(()=>{
    props.fetchStream(props.id)
  },[]);
  if(props.stream)
  return (<><div>StreamEdit</div><div>{props.stream.title}</div><div>{props.stream.description}</div><div>{props.stream.id}</div></>);
  else
  return null;
};
const mapStateToProps=(state,ownProps)=>{
  //console.log(state);
  return {stream:state.streams[ownProps.id]};
};
export default connect(
  mapStateToProps
  ,{fetchStream}
  )(StreamEdit);
