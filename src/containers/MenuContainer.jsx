import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import useChat from '../swr/useChat';
import ProfileContainer from './ProfileContainer';
import MenuSideBar from '../components/menu/MenuSideBar';
import MenuRoute from '../routes/MenuRoute';
import ChattingRoomContainer from './ChattingRoomContainer';
import { Outlet,useNavigate } from 'react-router-dom';

const Wrapper = styled.main`
  width: 100%;
  display: flex;
`;

const MenuContainer = (props) => {

  const navigate = useNavigate();
  const [ menuIndex, setMenuIndex ] = useState(0);
  const roomList = [];
  const socket = null;

  useEffect(() => {
    if(menuIndex === 0) {
      navigate('/menu/friends');
    }
  },[]);

  const onSideMenuChange = (index) => {
    setMenuIndex(index);
    if(index === 0) {
      navigate('/menu/friends');
  
    } else if(index === 1) {
      navigate('/menu/chatting');
    }
  };

  // {chatInfo.isChattingRoomShown ? <ChattingRoomContainer /> : null}

  return (
    <React.Fragment>
      <ProfileContainer />
      
      <Wrapper>
        <MenuSideBar roomList={roomList} socket={socket} menuIndex={menuIndex} onSideMenuChange={(index)=>onSideMenuChange(index)} />
        <Outlet />
      </Wrapper>
    </React.Fragment>
  );
};

export default MenuContainer;
