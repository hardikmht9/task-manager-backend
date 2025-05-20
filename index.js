const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
