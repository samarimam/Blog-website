import express from 'express';
import Connection from './database/db.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', Router);

const PORT = 8000;
app.listen(PORT, () => console.log(`server is running in port ${PORT}`));



Connection();
// w4bCFhKWO9qVmDCO
// mongodb+srv://samar_mern_todolist:<password>@cluster0.c6qid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority