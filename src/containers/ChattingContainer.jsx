import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/chatting/Header';
import Content from '../components/chatting/Content';

const Wrapper = styled.main`
  flex-grow: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ChattingContainer = (props) => {
  const [searchText, setSearchText] = useState('');

  const changeSearch = (param) => {
    setSearchText(param);
  };

  return (
    <Wrapper>
      <Header changeSearch={changeSearch} />
      <Content search={searchText} />
    </Wrapper>
  );
};

export default ChattingContainer;
