const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/data', (req, res) => {
  res.send('Use POST to send JSON data to this route.');
});


app.post('/data', (req, res) => {
  res.json(req.body);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
