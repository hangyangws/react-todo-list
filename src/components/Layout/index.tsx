import React from 'react';

import logo from '@resource/icons/icon.png';
import Loading from '@components/Loading';
import { IProps } from 'src/types';

import './index.scss';

const Layout = (props: IProps) => (
  <>
    <h1 className="layout-header">
      <img className="layout-logo" src={logo} />
      TODO LIST!
    </h1>
    <main className="layout-main">{props.children}</main>
    <Loading />
  </>
);

export default Layout;
