const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('I am running on port 3001');
})

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
})