// ProgressBar.js

import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ description, progress }) => {
    return (
      <div className="progress-wrapper">
        {description && <p className="progress-description">{description}</p>}
        <div className="progress-bar">
          <span className="progress-bar-fill" style={{ width: `${progress}%` }}></span>
        </div>
      </div>
    );
  };
  

export default ProgressBar;
