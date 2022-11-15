import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  & a {
    padding: 0 5px;
  }
`;

const Footer = (props) => {
  return (
    <Wrapper>
      <Link to="/signup">회원가입</Link>
    </Wrapper>
  );
};

export default Footer;
