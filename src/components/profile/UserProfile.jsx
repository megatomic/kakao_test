import React, { useState } from 'react';
import styled from 'styled-components';
import useRoot from '../../swr/useRoot';

const Wrapper = styled.section`
  width: 100%;
  height: 450px;
  padding-top: 300px;
`;

const ProfileText = styled.div`
  position: relative;
  & p {
    display: inline-block;
    max-width: 80%;
    padding-right: 5px;
    min-height: 19px;
    font-size: 13px;
    color: #ffffff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    & b {
      font-size: 16px;
      font-weight: bold;
    }
  }
  & i {
    position: absolute;
    bottom: 10px;
    cursor: pointer;
  }
`;

const SettingOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

const ProfileImageSettingWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: auto;
  margin-bottom: 10px;
  & img {
    display: block;
    width: 90px;
    height: 90px;
    border-radius: 35px;
    cursor: pointer;
  }
`;
const FriendProfileImageWrapper = styled(ProfileImageSettingWrapper)`
  & img {
    cursor: auto;
  }
`;

const UserProfile = () => {
  const { userInfo, profileInfo, setUserInfo, setProfileInfo } = useRoot();

  const [isShowBgSetting, showBgSetting] = useState(false);
  const [isShowProfileSetting, showProfileSetting] = useState(false);
  const [isShowNameChange, showNameChange] = useState(false);
  const [isShowStatusMsgChange, showStatusMsgChange] = useState(false);

  const onSettingBgClick = () => {
    showBgSetting(false);
    showProfileSetting(false);
  };
  const showSettinOverlay = isShowBgSetting || isShowProfileSetting ? <SettingOverlay onClick={onSettingBgClick} /> : '';

  const isMe = userInfo.id === profileInfo.id;
  const isFriend = userInfo.friendList.find((friend) => friend.id === profileInfo.id);

  const showProfileInputWindow = () => {};

  return (
    <React.Fragment>
      {showSettinOverlay}
      {showProfileInputWindow()}
      <Wrapper>
        <FriendProfileImageWrapper>
          <img src="/asset/base_profile.jpg" alt="profile_image" />
        </FriendProfileImageWrapper>
        <ProfileText>
          <p>
            <b>{profileInfo.name}</b>
          </p>
          {isMe || isFriend ? <i className="fas fa-pen" onClick={() => showNameChange(true)} /> : null}
        </ProfileText>
        <ProfileText>
          <p>{profileInfo.status_msg}</p>
          {isMe ? <i className="fas fa-pen" onClick={() => showStatusMsgChange(true)} /> : null}
        </ProfileText>
      </Wrapper>
    </React.Fragment>
  );
};

export default UserProfile;
