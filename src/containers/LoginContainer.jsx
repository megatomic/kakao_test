import React from 'react';
import styled from 'styled-components';
import Header from '../components/login/Header';
import Content from '../components/login/Content';
import Footer from '../components/login/Footer';
import * as api from '../api/auth';

const Wrapper = styled.div`
  width: 360px;
  height: 600px;
  background-color: #ffeb33;
`;

const LoginContainer = (props) => {

  return (
    <Wrapper>
      <Header />
      <Content />
      <Footer />
    </Wrapper>
  );
};

export default LoginContainer;
