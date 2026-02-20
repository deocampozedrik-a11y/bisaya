const express = require('express');
const path = require('path');
const app = express();
let latestReading = { building: 'A', flowRate: 0, totalLiters: 0 };

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/api/reading', (req, res) => {
  latestReading = req.body;
  res.json({ status: 'ok' });
});

app.get('/api/latest', (req, res) => {
  res.json(latestReading);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});