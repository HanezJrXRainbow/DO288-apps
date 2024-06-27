const express = require('express');
const app = express();
const port = 8080;

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
