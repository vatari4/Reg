import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [response, setResponse] = useState('');

  const sendJSON = () => {
    const url = 'http://mihailmaximov.ru/projects/json/json.php';
    const data = JSON.stringify({ name, mail });

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(response => response.text())
    .then(data => {
      setResponse(data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
  };

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={mail} onChange={e => setMail(e.target.value)} placeholder="Mail" />

      <button onClick={sendJSON}>Проверить JSON</button>

      <div>{response}</div>
    </div>
  );
};

export default App;