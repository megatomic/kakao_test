import React,{useState} from 'react';
import styled from 'styled-components';
import Header from '../components/friends/Header';
import Content from '../components/friends/Content';

const Wrapper = styled.main`
  flex-grow: 1;
  width: 100%;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
`;

const FriendsContainer = (props) => {

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

export default FriendsContainer;
