import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../pages/Modal';
import useProfile from '../swr/useProfile';

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

const ProfileContainer = (props) => {
  // const { profileInfo, setProfile, hideProfile } = useProfile();
  // onst setBackground = profileInfo.background_img_url != null ? <img src={profileInfo.background_img_url} alt="bg_image" /> : '';

  // return (
  //   <Modal onClose={hideProfile}>
  //     <Wrapper>
  //       <BackgroundBase>{setBackground}</BackgroundBase>
  //       <CancelIcon className="fas fa-times" onClick={hideProfile} />
  //       <UserProfile />
  //       <Menu isMe={isMe} isFriend={isFriend} onAddFriendClick={onAddFriendClick} onChatClick={onChatClick} />
  //     </Wrapper>
  //   </Modal>
  // );

  return <p>ProfileContainer ProfileContainer</p>;
};

export default ProfileContainer;
