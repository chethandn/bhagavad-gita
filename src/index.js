import React from 'react';
import { render } from 'react-dom';
import loadable from '@loadable/component';
import { Provider } from 'react-redux';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import store from './redux';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const Quote = styled.p`
  line-height: 100vh;
  color: #ffffff;
  text-align: center;
  drop-shadow: 20px 20px 20px #ccc;
  font-size: 2rem;
  font-weight: 900;
`;

const Antd = loadable.lib(() => import('antd/dist/antd.css'));
const Theme = loadable.lib(() => import('../src/scss/index.scss'));

const AppComponent = loadable(() => import('./App'), {
fallback: <Row justify="center" align="middle">
  <Col>
  <Quote>Be the change you wish to see</Quote>
  </Col>
</Row>
});

render(
  <Provider store={store}>
    <Antd />
    <Theme />
    <AppComponent />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
