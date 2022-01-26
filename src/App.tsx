import { Component } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import TestPage from './pages/TestPage';
import PresentationPage from './pages/PresentationPage';
import NotFoundPage from './pages/NotFoundPage';

import { Dispatch } from 'redux';
import socketActions from './redux/actions/socketActions';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const socket = io('http://localhost:3001');
    this.props.setMainSocket(socket);
  }

  render() {
    return (
      <div className="app-wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/presentation/:id" element={<PresentationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setMainSocket: (socket: any) => dispatch({
      type: socketActions.SET_MAIN_SOCKET,
      payload: socket,
    }),
  }
}

export default connect(null, mapDispatchToProps)(App);
