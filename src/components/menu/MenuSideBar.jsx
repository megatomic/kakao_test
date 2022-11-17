import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
//import { logout } from '../../api/auth';

const SideBar = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100px;
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

const MenuSideBar = (props) => {
  const showNotReadChat = () => {};

  const onLogoutClick = () => {
    const isLogout = window.confirm('로그아웃 하시겠습니까?');
    if (isLogout) {
      // socket.close();
      //props.logout();
    }
  };

  return (
    <SideBar>
      <ul>
        <Menu to="/menu/friends">
          <li title="친구">
            <i className="fas fa-user" />
            <Notification>1</Notification>
          </li>
        </Menu>
        <Menu className="active" to="/menu/chatting">
          <li title="채팅">
            <i className="fas fa-comment" />
            {props.showNotReadChat}
          </li>
        </Menu>
        <li title="로그아웃" onClick={onLogoutClick}>
          <i className="fas fa-sign-out-alt" />
        </li>
      </ul>
    </SideBar>
  );
};

export default MenuSideBar;
