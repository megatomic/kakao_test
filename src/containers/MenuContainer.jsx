import React from 'react';
import styled from 'styled-components';
import useChat from '../swr/useChat';
import ProfileContainer from './ProfileContainer';

const Wrapper = styled.main`
  width: 100%;
  display: flex;
`;

const MenuContainer = (props) => {
  const { chatInfo, setChatInfo } = useChat();

  return (
    <React.Fragment>
      <ProfileContainer />
    </React.Fragment>
  );
};

export default MenuContainer;
