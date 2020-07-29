import React from 'react';
import './index.css';

const Loader = ({ size = 'm' }) => (
  <div className={`loading-box-${size} loading`}></div>
);

export default Loader;
