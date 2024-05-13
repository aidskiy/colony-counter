
import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [count, setCount] = useState(null);

  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setCount(data.count);
  };

  return (
    <div className="App">
      <input type="file" onChange={onFileChange} />
      <button onClick={onSubmit}>Count Colonies</button>
      {count && <h1>Number of Colonies: {count}</h1>}
    </div>
  );
}

export default App;

