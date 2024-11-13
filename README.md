# Server-side Todo API

## Project Overview

This project is a **Todo API** built for managing tasks. It was created as part of the **Full Stack Engineer Assessment [Intern]** at Sleeky Programmers. The API provides
full CRUD functionality to create, update, delete, and fetch todos. The application also implements pagination to retrieve todos in a paginated format.

The backend is built using **Express**, **MongoDB**, and integrates **Swagger** for API documentation.

### Key Features

- **Create** a new todo item
- **Read** todos (fetch all or single todo by ID)
- **Update** a todo's information
- **Delete** a todo
- **Pagination** support for fetching todos

## Technologies and Tools

The server-side of the application is built using the following technologies and tools:

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB
- **CORS** - Cross-Origin Resource Sharing middleware for Express
- **Swagger** - For API documentation
- **dotenv** - Environment variable management
- **Error handling middleware** - Custom error handling for managing errors gracefully

## Installation Instructions

### Prerequisites

Before you begin, ensure that you have the following installed:

- **Node.js** (version 14 or higher)
- **MongoDB** (locally or use a cloud service like MongoDB Atlas)
- **Git**

### Step-by-Step Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ShilohGeorge12/to-do.git
   cd todo-api
   ```

2. **Install dependencies**: Install all necessary dependencies by running:

   ```bash
   npm install
   ```

3. **Set up environment variables**: Create a `.env` file in the root of the project, and add the following environment variables:

   ```
   PORT=2233
   DATABASE_URL=mongodb://localhost:27017/todoapp  # Update with your MongoDB connection string
   ```

   Make sure to replace `DATABASE_URL` with your actual MongoDB connection string if using a cloud database like MongoDB Atlas.

4. **Run the development server**: Start the server by running the following command:

   ```bash
   npm run dev
   ```

   The server will be running at `http://localhost:2233`.

---

## API Documentation (Swagger)

The API documentation for this project is generated using **Swagger**. You can access the API documentation in the browser once the server is running by navigating to:

```
http://localhost:2233/api-docs
```

This will display a user-friendly interface that documents all available endpoints, including descriptions, request parameters, and responses.

### Example Endpoints

1. **Get All Todos**
   - **Method**: `GET`
   - **URL**: `/api/todos`
   - **Description**: Fetches a list of all todos with pagination.
2. **Get Todo by ID**

   - **Method**: `GET`
   - **URL**: `/api/todos/:id`
   - **Description**: Fetch a specific todo by its ID.

3. **Create a Todo**

   - **Method**: `POST`
   - **URL**: `/api/todos`
   - **Description**: Creates a new todo item.
   - **Body**:
     ```json
     {
     	"title": "Sample Todo",
     	"completed": false
     }
     ```

4. **Update a Todo**
   - **Method**: `PUT`
   - **URL**: `/api/todos/:id`
   - **Description**: Updates a specific todo item by its ID.
5. **Delete a Todo**
   - **Method**: `DELETE`
   - **URL**: `/api/todos/:id`
   - **Description**: Deletes a specific todo item by its ID.

For more details on each route, refer to the **Swagger UI** at `/api-docs`.

---

## Error Handling

The application includes custom error handling middleware to catch errors and send appropriate responses. Errors are caught by the `ErrorHandler` middleware and sent as a
JSON response.

### Error Structure

All errors are returned with the following structure:

```json
{
	"error": "Error message",
	"status": 400
}
```

---

## Contributing

We welcome contributions! Please follow these steps to contribute to the project:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch.
4. Make your changes and commit them.
5. Push your changes to your forked repository.
6. Create a pull request describing the changes you made.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or concerns, feel free to reach out to the project maintainer:

- **Name**: Shiloh George
- **Email**: [Email](mailTo:shilohgeorge2019@gmail.com)
