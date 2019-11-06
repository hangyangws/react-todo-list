import React from 'react';
import { useStore } from 'hooks-store';

import { INoticeState } from '@store/notice/index.types';

import './index.scss';

const Loading = () => {
  const { loading } = useStore<INoticeState>('notice');

  return loading ? (
    <div className="loading">
      <div className="loading-content">
        <div className="loading-bounce1" />
        <div className="loading-bounce2" />
      </div>
    </div>
  ) : null;
};

export default Loading;
