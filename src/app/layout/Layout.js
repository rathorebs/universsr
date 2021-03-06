import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { helmet } from '@config';
import Header from './Header';
import Body from './Body';
import '@common/styles/global.scss';
import styles from './styles/Layout.module.scss';

const Layout = props => (
  <div styleName="styles.container">
    <Helmet {...helmet} />
    <Header {...props} />
    <Body {...props} />
  </div>
);

export default withRouter(Layout);
