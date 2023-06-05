import React from 'react';
import { Router,Route, Routes, unstable_HistoryRouter as CustomHistoryRouter } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';
import { useParams } from 'react-router-dom';
const App = () => {
  const StreamEditWrapper = () => {
    const { id } = useParams();
    return <StreamEdit id={id} />;
  };
  const StreamDeleteWrapper = () => {
    const { id } = useParams();
    return <StreamDelete id={id} />;
  };
  const StreamShowWrapper = () => {
    const { id } = useParams();
    return <StreamShow id={id} />;
  };
  return (
    <div className="ui container">
      {/* <BrowserRouter> */}
      <CustomHistoryRouter history={history}>
          <Header />
          <Routes>
            <Route path="/" exact element={<StreamList history={history}/>} />
            <Route path="/streams/new" exact element={<StreamCreate history={history}/>} />
            <Route path="/streams/edit/:id" exact element={<StreamEditWrapper/>}/>
            <Route path="/streams/delete/:id" exact element={<StreamDeleteWrapper/>} />
            <Route path="/streams/:id" exact element={<StreamShowWrapper/>} />
          </Routes>
        </CustomHistoryRouter>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
