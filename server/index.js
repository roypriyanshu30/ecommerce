import express from 'express';
import Connection from './database/db.js';
import Defaultdata from './default.js';
import router from './router/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use('/',router);

const PORT=8000;
Connection();
app.listen(PORT,() => console.log(`server is running on PORT ${PORT} hello`));

Defaultdata();