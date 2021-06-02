require('dotenv').config();
const express = require('express');
const router = require('./routes');
const cors = require('cors');
const port = process.env.PORT || 3333;
const Env = process.env;

const app = express();
app.use(cors());
app.use('/api', router);

app.listen(port, ()=>{
    console.log(`API LISTENING ON http://${Env.HOST}:${port}`);
});
