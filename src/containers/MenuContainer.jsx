import React from 'react';
import styled from 'styled-components';
import useChat from '../swr/useChat';
import ProfileContainer from './ProfileContainer';
import MenuSideBar from '../components/menu/MenuSideBar';
import MenuRoute from '../routes/MenuRoute';
import ChattingRoomContainer from './ChattingRoomContainer';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.main`
  width: 100%;
  display: flex;
`;

const MenuContainer = (props) => {
  const { chatInfo, setChatInfo } = useChat();
  const roomList = [];
  const socket = null;

  const logout = () => {};

  return (
    <React.Fragment>
      <ProfileContainer />
      {chatInfo.isChattingRoomShown ? <ChattingRoomContainer /> : null}
      <Wrapper>
        <MenuSideBar roomList={roomList} socket={socket} logout={logout} />
        <Outlet />
      </Wrapper>
    </React.Fragment>
  );
};

export default MenuContainer;
