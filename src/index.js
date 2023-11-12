const express = require('express');
const app = express();
const router = require('./routers/index');

app.use(express.json());

app.use('/', router);


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});