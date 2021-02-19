import React from 'react';
import bottomLayout from '../../images/bottom-layout.png';
import mainLayout from '../../images/main-layout.png';

import './layoutComponent.scss';

export const LayoutComponent = () => {
  return (
    <div className="layout">
      <img src={bottomLayout} className="bottom-layout" />
      <img src={mainLayout} className="main-layout" />
    </div>
  );
};
