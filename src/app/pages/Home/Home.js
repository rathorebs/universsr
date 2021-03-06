import React from 'react';
import Alert from 'react-s-alert';
import logo from '@assets/images/logo.png'; // example of import assets image
import { PageWrapper } from '@layout';
import './styles/Home.module.scss';

const Home = () => (
  <PageWrapper title="Home">
    <div styleName="logo">
      <img src={logo} alt="React Redux Boilerplate" />
    </div>
    <p styleName="lead">
      <span>
        universsr is <strong>universal</strong> React-Redux starter kit.
      </span>
    </p>
    <div>
      <a
        href="#"
        onClick={evt => {
          evt.preventDefault();
          Alert.info('Hello! This is universal React + Redux demo site.');
        }}
      >
        Show alert
      </a>
      {' or, go to '}
      <a href="https://github.com/borisding/universsr">GitHub repository</a>
    </div>
  </PageWrapper>
);

export default Home;
