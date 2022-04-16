import express from "express"
import 'dotenv/config'

// routes
// import authRoutes from './routes/authRoutes.js';

const app = express();


app.use(express.json());

// app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Server is up!')
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`);
})
