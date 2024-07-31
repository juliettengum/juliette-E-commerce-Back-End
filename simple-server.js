const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api/test', (req, res) => {
  res.json({ message: 'Test endpoint working!' });
});

app.listen(PORT, () => {
  console.log(`Simple server listening on port ${PORT}!`);
});
