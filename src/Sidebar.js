import React from 'react';

const Sidebar = () => {
  const handleShareClick = () => {
    // Implement share document functionality
    // This function will be called when the share button is clicked
  };

  return (
    <div className="sidebar">
      <a href="https://drive.google.com/" target="_blank" rel="noopener noreferrer">
        Google Drive
      </a>
      <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
        Gmail
      </a>
      <button onClick={handleShareClick}>
        Share
      </button>
    </div>
  );
};

export default Sidebar;
