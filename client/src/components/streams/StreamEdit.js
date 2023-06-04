import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import _ from 'lodash'
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
  console.log(props);
  useEffect(()=>{
    props.fetchStream(props.id)
  },[]);
  const onSubmit=(formValues)=>{
    props.editStream(props.id,formValues);
    console.log(formValues);
  };
  if(props.stream)
    return <>
      <h3>Edit A Stream</h3>
      <StreamForm onSubmit={onSubmit} initialValues={_.pick(props.stream,"title","description")}/>
    </>
  else
    return <>Loading ...</>;
};
const mapStateToProps=(state,ownProps)=>{
  //console.log(state);
  return {stream:state.streams[ownProps.id]};
};
export default connect(
  mapStateToProps
  ,{fetchStream, editStream}
  )(StreamEdit);
