const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8080;

// Path ke file config
const configPath = '/opt/app-root/config/configname';

// Fungsi untuk membaca nama dari file config
function getNameFromFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.trim();
  } catch (err) {
    console.error('Error reading config file:', err);
    return 'Unknown';
  }
}

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


app.get('/hello', (req, res) => {
  const nama = getNameFromFile(configPath);
  if (nama) {
    res.send(`Hello ${nama}`);
  } else {
    res.send('Hello, Anonymous!');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
