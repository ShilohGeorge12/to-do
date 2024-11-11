import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { ErrorHandler } from './Middlewares/Error/index.js';
import TodoRoutes from './routes/todos/index.js';
config();
const App = express();
const port = process.env.PORT;
App.use(cors());
App.use(express.json());
// App.use(express.static(path.join(__dirname, 'public')))
try {
    mongoose.set('strictQuery', false);
    mongoose.connect(`${process.env.DATABASE_URL}`);
}
catch (err) {
    console.log(err);
}
App.get('/', (req, res) => {
    res.send('Hello world');
    // res.sendFile(path.join(__dirname, 'public/index.html'));
});
App.use('/api', TodoRoutes);
App.use('*', ErrorHandler);
App.listen(port, () => console.log('listening to https://localhost:' + port));
