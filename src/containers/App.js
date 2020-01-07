import React from 'react';
import './App.css';

import Main from '../components/Main/Main';
import SlideBar from "../components/SlideBar/SlideBar";
import { store } from '../redux/store';

function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <SlideBar contacts={contacts} activeUserId={activeUserId}/>
      <Main activeUserId={activeUserId} user={user} />
    </div>
  );
}

export default App;
