import React, { useState } from 'react';

const App = () => {
  const [firstName, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const sendJSON = () => {
    const url = 'http://mihailmaximov.ru/projects/json/json.php';
    const data = JSON.stringify({ firstName, email, password });

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
      <input type="text" value={firstName} onChange={e => setName(e.target.value)} placeholder="firstName" />
      <input type="text" value={email} onChange={e => setMail(e.target.value)} placeholder="email" />
      <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />

      <button onClick={sendJSON}>Проверить JSON</button>

      <div>{response}</div>
    </div>
  );
};

export default App;