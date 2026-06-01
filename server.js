const express = require('express');
const app = express();
const os = require('os');

let visitors = 0;

app.get('/', (req, res) => {
  visitors++;
  res.send(`
    <h1>Hello from Kubernetes!</h1>
    <p>Time: ${new Date().toISOString()}</p>
    <p>Container ID: ${os.hostname()}</p>
    <p>Visitors: ${visitors}</p>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(3000, () => console.log('Running on port 3000'));
