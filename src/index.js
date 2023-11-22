const express = require('express');
const app = express();
const router = require('./routers/index');
const cors = require('cors');
const mongo = require('./data');

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});