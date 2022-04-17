import express from "express"
import 'dotenv/config'
import 'express-async-errors';

// db
import db from "./db/database.js";

// routes
import authRoutes from './routes/authRoutes.js';
import errorHandler from "./middlewares/errorHandler.js";

const app = express();






app.use(express.json());

app.use('/api/auth', authRoutes);
app.use(errorHandler.errorHandlerMiddleware);

app.get('/', (req, res) => {
    res.send('Server is up!')
})


const startServer = async () => {
    try {
        await db.authenticate()
            .then(() => console.log('Database connected...'))
        app.listen(process.env.PORT, () => {
            console.log(`Listening on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
startServer();