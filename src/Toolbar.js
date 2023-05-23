import React, { useState } from 'react';

const Toolbar = () => {
  const [documentName, setDocumentName] = useState('Untitled');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  const handleDocumentNameChange = (event) => {
    setDocumentName(event.target.value);
  };

  const handleBoldClick = () => {
    setBold(!bold);
  };

  const handleItalicClick = () => {
    setItalic(!italic);
  };

  const handleUnderlineClick = () => {
    setUnderline(!underline);
  };

  return (
    <div className="toolbar">
      <input
        type="text"
        value={documentName}
        onChange={handleDocumentNameChange}
      />

      <div className="formatting-buttons">
        <button
          className={bold ? 'active' : ''}
          onClick={handleBoldClick}
        >
          Bold
        </button>
        <button
          className={italic ? 'active' : ''}
          onClick={handleItalicClick}
        >
          Italic
        </button>
        <button
          className={underline ? 'active' : ''}
          onClick={handleUnderlineClick}
        >
          Underline
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
