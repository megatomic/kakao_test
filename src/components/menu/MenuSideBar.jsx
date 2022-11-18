import React from 'react';
import styled from 'styled-components';
import { Navigate, NavLink } from 'react-router-dom';
import useAuth from '../../swr/useAuth';

//import { logout } from '../../api/auth';

const SideBar = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100px;
  top: 0px;
  left: 0px;
  height: 100%;
  min-height: 100vh;
  background: #dfdfdf;
  padding-top: 20px;
  z-index: 2;
  & li {
    padding: 10px;
    text-align: center;
    font-size: 35px;
    color: #a6a7a8;
    cursor: pointer;
    &:hover {
      color: #888777;
    }
  }
`;

const Notification = styled.span`
  position: absolute;
  display: inline-block;
  padding: 3px;
  color: #fff;
  background-color: #ff513d;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  min-width: 25px;
  text-align: center;
  font-size: 13px;
`;

const Menu = styled(NavLink)`
  display: inline-block;
  width: 100%;
  &.active {
    pointer-events: none;
    color: #000;
    & li {
      position: relative;
      & ${Notification} {
        top: 7px;
        left: 55px;
        font-size: 12px;
      }
    }
  }
`;

const MenuButton = styled.button`
  background-color: #dfdfdf;
  &.active {
    pointer-events: none;
    & li{
      & i{
        color: #333333;
      }
    }
  }
`;


const MenuSideBar = ({menuIndex,onSideMenuChange}) => {

  const { authInfo, setAuthInfo, requestLogin, requestLogout } = useAuth();
  const showNotReadChat = () => {};

  const onLogoutClick = () => {
    const isLogout = window.confirm('로그아웃 하시겠습니까?');
    if (isLogout) {
      // socket.close();
      requestLogout();
    }
  };

  if(authInfo.logined === false) {
    return <Navigate to="/login" />
  }

  const onFriendListClick = (e) => {
    //e.preventDefault();
    onSideMenuChange(0);
  };

  const onChatListClick = (e) => {
    //e.preventDefault();
    onSideMenuChange(1);
  };

  return (
    <SideBar>
        <MenuButton className={menuIndex===0?'active':'inactive'} onClick={(e)=>onFriendListClick(e)}>
          <li title="친구">
            <i className="fas fa-user" />
            <Notification>4</Notification>
          </li>
        </MenuButton>
        <MenuButton className={menuIndex===1?'active':'inactive'} onClick={(e)=>onChatListClick(e)}>
          <li title="채팅">
            <i className="fas fa-comment" />            
          </li>
        </MenuButton>
        <MenuButton title="로그아웃" onClick={onLogoutClick}>
          <li title="로그아웃">
            <i className="fas fa-sign-out-alt" />
          </li>
        </MenuButton>
    </SideBar>
  );
};

export default MenuSideBar;
