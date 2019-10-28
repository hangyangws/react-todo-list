import React from 'react';
import { useStore } from 'hooks-store';

import './index.scss';

const Loading = () => {
  const { loading } = useStore('notice') as any;

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
