import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../pages/Modal';
import Menu from '../components/profile/Menu';
import UserProfile from '../components/profile/UserProfile';
import useRoot from '../swr/useRoot';

const Wrapper = styled.main`
  width: 360px;
  height: 580px;
  margin: auto;
  color: #ffffff;
  text-align: center;
`;

const BackgroundBase = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #848b91;
  z-index: -1;
  & img {
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
`;

const CancelIcon = styled.i`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 15px;
  color: #fff;
  z-index: 100;
  cursor: pointer;
`;

const ProfileContainer = (props) => {
  const { userInfo, profileInfo, setUserInfo, setProfileInfo, isProfileShown, setProfileShown } = useRoot();
  //  onst setBackground = profileInfo.background_img_url != null ? <img src={profileInfo.background_img_url} alt="bg_image" /> : '';

  const isMe = true; //userInfo.id === profileInfo.id;
  const isFriend = false; //userInfo.friendList.find((friend) => friend.id === profileInfo.id);
  const setBackground = '';

  const onChatClick = () => {};

  const onAddFriendClick = () => {};

  if (isProfileShown === false) {
    return null;
  }

  const hideProfile = () => {
    setProfileShown(false);
  };

  return (
    <Modal onClose={hideProfile}>
      <Wrapper>
        <BackgroundBase>{setBackground}</BackgroundBase>
        <CancelIcon className="fas fa-times" onClick={hideProfile} />
        <UserProfile />
        <Menu isMe={isMe} isFriend={isFriend} onAddFriendClick={onAddFriendClick} onChatClick={onChatClick} />
      </Wrapper>
    </Modal>
  );

  return <p></p>;
};

export default ProfileContainer;
