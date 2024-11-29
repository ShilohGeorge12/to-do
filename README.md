# Server-side Nest Todo API

## Project Overview

This project is a **Nest Todo API** built for managing tasks. It was created as part of the **Full Stack Engineering [Intern] Role** at Sleeky Programmers To learn This **NestJS**. The API provides
full CRUD functionality to create, update, delete, and fetch todos. The application also implements pagination to retrieve todos in a paginated format.

The backend is built using **NestJs** and **MongoDB**.

### Key Features

- **Create** a new todo item
- **Read** todos (fetch all or single todo by ID)
- **Update** a todo's information
- **Delete** a todo
- **Pagination** support for fetching todos

## Technologies and Tools

The server-side of the application is built using the following technologies and tools:

- **Node.js** - JavaScript runtime
- **NestJs** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB
- **CORS** - Cross-Origin Resource Sharing middleware for Express

## Installation Instructions

### Prerequisites

Before you begin, ensure that you have the following installed:

- **Node.js** (version 14 or higher)
- **MongoDB** (locally or use a cloud service like MongoDB Atlas)
- **Git**

### Step-by-Step Setup

1. **Clone the repository**:

   ```bash
   git clone --single-branch --branch nest-server git@github.com:yourusername/to-do.git nest-server
   cd nest-server
   ```

2. **Install dependencies**: Install all necessary dependencies by running:

   ```bash
   npm install
   ```

3. **Set up environment variables**: Create a `.env` file in the root of the project, and add the following environment variables:

   ```
   PORT=2232
   DATABASE_URL=mongodb://localhost:27017/todo_app  # Update with your MongoDB connection string
   ```

   Make sure to replace `DATABASE_URL` with your actual MongoDB connection string if using a cloud database like MongoDB Atlas.

4. **Run the development server**: Start the server by running the following command:

   ```bash
   npm run start:dev
   ```

   The server will be running at `http://localhost:2232`.

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
