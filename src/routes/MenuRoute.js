import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FriendsContainer from '../containers/FriendsContainer';
import ChattingContainer from '../containers/ChattingContainer';

const MenuRoute = () => {
  return (
    <Routes>
      <Route path="/friends" element={<FriendsContainer />} />
      <Route path="/chatting" element={<ChattingContainer />} />
    </Routes>
  );
};

export default MenuRoute;
