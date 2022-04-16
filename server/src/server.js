import express from "express"
import 'dotenv/config'
import exphbs from 'express-handlebars';
import bodyParser from "body-parser";
import path from 'path';

// db
import db from "./db/database.js";

// routes
// import authRoutes from './routes/authRoutes.js';

const app = express();


db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error : ' + err))

app.use(express.json());

// app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Server is up!')
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`);
})
