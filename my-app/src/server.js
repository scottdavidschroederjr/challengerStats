const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {stats} = require("./database/analysis/stats.js")



const app = express();

app.use(cors());
app.use(bodyParser.json()); // Use body-parser middleware

// handles incoming POST requests
app.post('/api/data', async (req, res) => {
  await stats().then(data => res.json(data))
  ;
});

// starts up the server
app.listen(3002, () => {
  console.log('Server is running on port 3001');
});
