import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SWRConfig } from 'swr';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initData = {
  'local:/common': { loginFailureMsg: '' },
  'local:/auth': { loginFailMsg: '', logined: false, authToken: null },
  'local:/chat': { isChattingRoomShown: false },
  'local:/profile': { background_img_url: null },
};

root.render(
  <SWRConfig value={{ fallback: initData }}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </SWRConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
