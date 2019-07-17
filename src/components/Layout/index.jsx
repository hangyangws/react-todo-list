import React from 'react';

import logo from '@resource/icons/icon.png';

import '@resource/css/base.css';
import './index.scss';

const Layout = (props) => (
  <React.Fragment>
    <h1 className="layout-header">
      <img className="layout-logo" src={logo} />
      Hello Worls!
    </h1>
    <main className="layout-main">
      {props.children}
    </main>
  </React.Fragment>
);

export default Layout;