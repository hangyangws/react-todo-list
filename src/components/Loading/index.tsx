import React from 'react';

import './index.scss';
import { useStore } from '../../hooks-store';

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
