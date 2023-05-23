import React, { useState } from 'react';

const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="text-editor">
      <textarea
        className="editor-textarea"
        value={content}
        onChange={handleChange}
        placeholder="Start typing..."
      />
    </div>
  );
};

export default TextEditor;
