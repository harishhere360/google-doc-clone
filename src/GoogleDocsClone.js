import React from 'react';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';

const GoogleDocsClone = () => {
  return (
    <div className="google-docs-clone">
      <Toolbar />
      <div className="main-content">
        <Sidebar />
        <TextEditor />
      </div>
    </div>
  );
}

export default GoogleDocsClone;
