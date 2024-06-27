const express = require('express');
const app = express();
const port = 8080;

// Endpoint untuk readiness check
app.get('/readiness', (req, res) => {
  // Tambahkan logika untuk memeriksa apakah aplikasi siap
  res.status(200).send('Ready');
});

// Endpoint untuk liveness check
app.get('/liveness', (req, res) => {
  // Tambahkan logika untuk memeriksa apakah aplikasi hidup
  res.status(200).send('Alive');
});

app.get('/profile', (req, res) => {
  const nama = process.env.Nama;
  if (nama) {
    res.send(`Hello ${nama}`);
  } else {
    res.send('Hello, Anonymous!');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
