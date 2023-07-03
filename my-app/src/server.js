const websiteRun = require('./script.js')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json()); // Use body-parser middleware

// handles incoming POST requests
app.post('/api/data', async (req, res) => {
  const serverRequestData = await websiteRun(req.body['firstUser'], req.body['secondUser'], req.body['set']);
  res.json(serverRequestData);
});

// starts up the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
