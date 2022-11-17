import React from 'react';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import FriendsContainer from './containers/FriendsContainer';
import ChattingContainer from './containers/ChattingContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="friends" element={<FriendsContainer />} />
          <Route path="chatting" element={<ChattingContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
