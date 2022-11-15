import React, { useState } from 'react';
import styled from 'styled-components';
import useAuth from '../../swr/useAuth';

const Wrapper = styled.main`
  width: 100%;
  height: 200px;
  padding-top: 30px;
  & input {
    display: block;
    margin: 0 auto;
    padding: 10px 5px;
    width: 230px;
    border: 1px solid #dcdcdc;
    &:first-child {
      border-bottom: none;
    }
    &:placeholder {
      color: #a2a2a2;
    }
  }
  & button {
    background-color: #423630;
    color: #fff;
    width: 230px;
    position: relative;
    display: block;
    margin: auto;
    margin-top: 25px;
    padding: 10px 5px;
    border: 1px solid #000;
    outline: none;
    @keyframes iconRotate {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    & i {
      position: absolute;
      top: 15px;
      right: 10px;
      color: #5c5c5c;
      animation: iconRotate 1.5s linear infinite;
    }
    &:hover {
      background-color: #594941;
      cursor: pointer;
    }
    &:active {
      background-color: #423630;
    }
    &.disabled {
      color: #969696;
      background: #e2e2e2;
      pointer-events: none;
      border: 1px solid #cccccc;
    }
  }
`;

const Content = (props) => {
  const { authInfo, setAuthInfo, requestLogin, requestLogout } = useAuth();

  const [loggingIn, setLogginIn] = useState(false);

  //const { login, changeMessage, loginFailureMsg, loggingIn } = props;
  const MAX_LEN = 20;
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onUserIdChange = (e) => {
    e.preventDefault();
    if (!loggingIn) {
      const value = e.target.value;
      setUserId(value);
    }
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    if (!loggingIn) {
      const value = e.target.value;
      setPassword(value);
      if (value.length >= 5) {
        authInfo.loginFailMsg = '';
        setAuthInfo(authInfo);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!loggingIn && password.length >= 5) {
      requestLogin(userId, password);
      setLogginIn(true);
      setPassword('');
    }
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <input type="text" value={userId} placeholder="계정" maxLength={MAX_LEN} onChange={onUserIdChange} />
        <input type="text" value={password} placeholder="암호" maxLength={MAX_LEN} onChange={onPasswordChange} />
        <button className={password.length < 5 ? 'disabled' : ''}>
          {loggingIn ? <i className="fas fa-circle-notch" /> : ''}
          <span>로그인</span>
        </button>
        <p>{authInfo.loginFailMsg}</p>
        <p>{JSON.stringify(authInfo)}</p>
      </form>
    </Wrapper>
  );
};

export default Content;
