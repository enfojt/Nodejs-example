const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  const timestamp = new Date().toLocaleString();
  const message = `Hello world! I have changed this text on: ${timestamp}`;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
