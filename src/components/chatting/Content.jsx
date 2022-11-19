import React, { useState } from 'react';
import styled from 'styled-components';

const MainContent = styled.section``;

const MyProfileBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  & img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    display: inline-block;
  }

  & .profile {
    display: inline-block;
    padding: 10px;

    & .profileName {
      font-size: 15px;
    }

    & .profileMsg {
      font-size: 13px;
    }
  }
`;

const FriendsBorder = styled.div`
  border-top: 0.5px solid #dcdcdc;
  margin: 10px 20px 0 12px;
  padding-top: 10px;
  & p {
    foont-size: 12px;
    color: #b4b4b4;
  }
`;

const ChatRow = styled.div`
  padding: 12px;
  & li {
    display: flex;
    align-items: center;
    & img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }

    & .chatting {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      & b {
        font-size: 15px;
      }
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

const RoomRowCell = (props) => {
  const { roomName, statusMsg, updatedAt, lastChat, notReadChat } = props;
  const { onImgClick, onDoubleClick } = props;

  const getUpdatedAt = (date) => {};
  const showNotReadChat = notReadChat ? <Notification>{notReadChat <= 300 ? notReadChat : '300+'}</Notification> : null;

  return (
    <ChatRow>
      <li onDoubleClick={onDoubleClick}>
        <img src="/asset/base_profile.jpg" alt="profile_image" onClick={onImgClick} />
        <div className="chatting">
          <div>
            <b>{roomName}</b>
            <span>{getUpdatedAt(updatedAt)}</span>
          </div>
          <div>
            {lastChat}
            {showNotReadChat}
          </div>
        </div>
      </li>
    </ChatRow>
  );
};

const Content = ({ search }) => {
  const searchRemoveBlank = search.replace(/ /g, '');

  console.log(`searchRemoveBlank:${searchRemoveBlank}`);

  //   const [profileName, setProfileName] = useState('박윤석');
  //   const [stateMsg, setStateMsg] = useState('열심히 살자');

  const rooms = [
    {
      roomID: 0,
      type: 'individual',
      participant: [{ name: '박윤석' }, { name: '김민재' }],
      roomName: '블파스',
      updatedAt: '오전 11:26',
      lastChat: '안녕하세요.',
      notReadChat: 0,
      statusMsg: '월드컵16강 가자',
    },
    {
      roomID: 1,
      type: 'individual',
      participant: [{ name: '손흥민' }, { name: '황희찬' }, { name: '김민재' }],
      roomName: 'Easy Writing',
      updatedAt: '어제 23:47',
      lastChat: '12월3일 번개하나요?',
      notReadChat: 2,
      statusMsg: '나이만 먹는다',
    },
    {
      roomID: 2,
      type: 'individual',
      participant: [{ name: '박윤석' }, { name: '최준' }],
      roomName: '앤스텝',
      updatedAt: '오후 8:14',
      lastChat: '일요일 전원 출근!',
      notReadChat: 1,
      statusMsg: '울버햄튼 망해라',
    },
  ];

  const onImgClick = (e) => {};

  const onDoubleClick = (e) => {};

  const renderRoomList = rooms.map((room) => {
    if (room.type === 'individual') {
      const participant = room.participant.length > 0 ? room.participant : [];
      const findRoom = participant.filter((person) => {
        return person.name.replace(/ /g, '').includes(search);
      });
      if (!findRoom && !room.roomName.replace(/ /g, '').includes(search)) {
        return null;
      }

      return (
        <RoomRowCell
          roomName={room.roomName}
          roomImg={'/asset/base_profile.jpg'}
          updatedAt={room.updatedAt}
          lastChat={room.lastChat}
          notReadChat={room.notReadChat}
          key={room.roomID}
          onImgClick={onImgClick}
          onDoubleClick={onDoubleClick}
        />
      );
    }
    return null;
  });

  return <MainContent>{renderRoomList}</MainContent>;
};

export default Content;
