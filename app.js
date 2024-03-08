const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Auto Refresh Example</title>
    </head>
    <body>
      <div id="content"></div>
      <script>
        function refreshContent() {
          fetch('/api/content')
            .then(response => response.text())
            .then(data => {
              document.getElementById('content').innerHTML = data;
            });
        }

        // Initial content load
        refreshContent();

        // Refresh content every 5 seconds
        setInterval(refreshContent, 5000);
      </script>
    </body>
    </html>
  `);
});

app.get('/api/content', (req, res) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'Europe/Helsinki',
  };
  const currentDate = new Date();
  const timestamp = currentDate.toLocaleDateString('fi-FI', options);
  console.log(timestamp);
  const message = `Hello world! I have changed this text on: ${timestamp}`;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
