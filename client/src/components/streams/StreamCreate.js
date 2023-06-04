import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
   //console.log(this.props);//to notice the function `this.props.handleSubmit` that provided by redux-form package
    return (
      <>
        <h3>Create A Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
