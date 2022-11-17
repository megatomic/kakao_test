import React from 'react';
import styled from 'styled-components';
import MenuContainer from '../containers/MenuContainer';

const Wrapper = styled.div`
  width: 100%;
`;

const Menu = (props) => {
  return (
    <Wrapper>
      <MenuContainer />
    </Wrapper>
  );
};

export default Menu;
