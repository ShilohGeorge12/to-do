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
} catch (err) {
	console.log(err);
}

App.get('/', (_, res) => {
	const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to ToDoneHub</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            text-align: center;
            padding: 50px;
            color: #333;
          }
          h1 {
            font-size: 3rem;
            color: #4caf50;
          }
          p {
            font-size: 1.2rem;
            margin: 20px 0;
            color: #555;
          }
          .cta-button {
            padding: 15px 25px;
            background-color: #4caf50;
            color: white;
            font-size: 1rem;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }
          .cta-button:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to ToDoneHub!</h1>
        <p>Your one-stop solution for managing and completing your tasks efficiently.</p>
        <a href="${process.env.FRONT_END_URL}" class="cta-button">Start Your Journey</a>
      </body>
    </html>
  `;

	res.send(htmlContent);
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
