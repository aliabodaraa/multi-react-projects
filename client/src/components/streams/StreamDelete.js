import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { useEffect } from 'react';
import { deleteStream } from "../../actions";
import { connect } from 'react-redux';
const StreamDelete = (props) => {
  
  let deleteCurrentStream=()=>{
    props.deleteStream(props.id);
  };
  const actions = (
    <React.Fragment>
      <button className="ui button negative" onClick={deleteCurrentStream}>Delete</button>
      <button className="ui button" onClick={()=>history.push("/")}>Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

export default connect(null,{deleteStream})(StreamDelete);
