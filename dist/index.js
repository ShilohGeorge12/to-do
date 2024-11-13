import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { ErrorHandler } from './Middlewares/Error/index.js';
import { TodoRoutes } from './routes/todos/index.js';
config();
const App = express();
const port = process.env.PORT;
// Swagger Configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0', // OpenAPI version
        info: {
            title: 'Todo API',
            version: '1.0.0',
            description: 'API documentation for the Todo application',
        },
        servers: [
            {
                url: `${process.env.BASE_URL}${port}/api`,
            },
        ],
    },
    // Path to the API docs
    apis: ['./dist/routes/todos/*.js'], // Adjust to the path of your route files
};
// Create Swagger spec
const swaggerSpec = swaggerJsdoc(swaggerOptions);
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
App.get('/', (_, res) => {
    res.send('Hello world');
    // res.sendFile(path.join(__dirname, 'public/index.html'));
});
// Serve Swagger UI
App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
App.use('/api', TodoRoutes);
// Catch-all route handler for any undefined routes
App.use('*', (_, res) => {
    res.send('The Route your looking for was not found!');
});
// Error handler middleware to handle any other errors
App.use('*', ErrorHandler);
App.listen(port, () => console.log('listening to http://localhost:' + port));
