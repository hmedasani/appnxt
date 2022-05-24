import React from 'react';
import ContentareaComponent from '../components/contentarea';
import HeaderComponent from '../components/header';

export default function TemplateT() {
  return (
    <div className="templateTContainer">
      <HeaderComponent />
      <div className="templateTContentarea">
        {/* <SidenavComponent /> */}
        <ContentareaComponent />
      </div>
    </div>
  );
}
