# ToDoneHub

**ToDoneHub** is a simple and efficient to-do list application built using **React** for the front-end and **Node.js/Express** for the back-end. The app helps users manage their daily tasks, track progress, and stay organized. With a clean and intuitive UI, it integrates features such as task creation, updating, deletion, and pagination.

This repository contains both the **client-side** and **server-side** components of the application. The server provides an API for handling to-do tasks, while the client offers a user-friendly interface to interact with the tasks.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Client Setup](#client-setup)
  - [Server Setup](#server-setup)
- [Usage](#usage)
- [SEO & Optimization](#seo--optimization)
- [Contributing](#contributing)
- [License](#license)
  
---

## Project Overview

ToDoneHub allows users to manage their to-do tasks, update them, and track progress through a simple, clean interface. The app utilizes a **RESTful API** to handle CRUD operations on the tasks. It also incorporates **SEO optimizations** for better search engine visibility and enhanced social media sharing.

### Client-Side

The client-side is built using **React**, with an emphasis on a user-friendly design and performance. It handles the UI, state management, and communicates with the server to display to-do tasks and perform actions such as creating, updating, and deleting tasks.

### Server-Side

The server-side is built with **Node.js** and **Express**, providing the API for managing tasks. It also implements robust error handling and validation for the requests made by the client. The server supports basic CRUD operations, pagination, and more.

---

## Features

- **Task Creation**: Easily add new to-do tasks with titles and descriptions.
- **Task Update**: Modify existing tasks, mark them as completed, or update their details.
- **Task Deletion**: Remove tasks that are no longer needed.
- **Pagination**: View tasks in paginated form for better scalability.
- **SEO & Social Media Optimization**: Enhanced Open Graph and Twitter card integrations for sharing and search engine ranking.
- **Error Handling**: Well-structured error responses for invalid requests.

---

## Tech Stack

**Client-Side**:
- **React** (v18)
- **Vite** (build tool)
- **TailwindCSS** (styling)
- **Axios** (HTTP requests)

**Server-Side**:
- **Node.js** (v18)
- **Express.js**
- **MongoDB** (database)
- **Mongoose** (ODM for MongoDB)
- **Swagger** (API documentation)

---

Sure! Below is the updated **Installation** section, which includes using `mkdir` to create a `to-done-hub` folder before cloning both the client and server repositories into separate directories. This ensures proper organization right from the start.

---

## Installation

### 1. **Create a `to-done-hub` Directory**

First, create a folder to house the entire project. This will ensure everything is neatly organized.

```bash
mkdir to-done-hub
cd to-done-hub
```

---

### 2. **Cloning the Client Branch into the `client` Folder**

To get started with the **client** side of the project, you can clone the `client` branch and rename the directory to `client`.

#### Using SSH (for SSH users):

```bash
git clone --single-branch --branch client git@github.com:yourusername/to-do.git client
```

This will clone the `client` branch directly into a folder named `client`.

#### Using HTTPS (for general users):

```bash
git clone --single-branch --branch client https://github.com/yourusername/to-do.git client
```

This will clone the `client` branch into a folder named `client`.

---

### 3. **Cloning the Server Branch into the `server` Folder**

Similarly, you can clone the `server` branch and rename the directory to `server`.

#### Using SSH (for SSH users):

```bash
git clone --single-branch --branch server git@github.com:yourusername/to-do.git server
```

This will clone the `server` branch into a folder named `server`.

#### Using HTTPS (for general users):

```bash
git clone --single-branch --branch server https://github.com/yourusername/to-do.git server
```

This will clone the `server` branch into a folder named `server`.

---

### Additional Steps After Cloning

Once you've cloned both branches, follow these steps to set up your local development environment:

1. **Navigate into the Project Directory**:

   For **client-side** (if you didn't already change directories after cloning):

   ```bash
   cd client
   ```

   For **server-side**:

   ```bash
   cd server
   ```

2. **Install Dependencies**:
   
   Run the following command to install all the dependencies for the client or server, depending on the branch you cloned.

   For **client-side**:
   
   ```bash
   npm install
   ```

   For **server-side**:
   
   ```bash
   npm install
   ```

3. **Start the Application**:

   For the **client-side**:
   
   ```bash
   npm run dev
   ```

   For the **server-side**:
   
   ```bash
   npm run dev
   ```

That's it! Your local development environment should now be set up with the client and server in separate, well-organized directories.

---

This method ensures that the project is well-structured right from the beginning and that both the client and server code are neatly organized in their respective directories.

## Usage

### API Endpoints

The server exposes the following API endpoints for interacting with the to-do tasks:

- **GET** `/api/todos` - Retrieve all to-do tasks (supports pagination).
- **POST** `/api/todos` - Create a new to-do task.
- **GET** `/api/todos/:id` - Retrieve a specific to-do task by ID.
- **PUT** `/api/todos/:id` - Update a to-do task by ID.
- **DELETE** `/api/todos/:id` - Delete a to-do task by ID.

### Client Usage

The client app allows users to:

- View all tasks.
- Create new tasks.
- Edit or update task details.
- Mark tasks as completed.
- Delete tasks.
- View tasks in a paginated format.

---

## SEO & Optimization

For improved SEO and social media optimization, **ToDoneHub** includes:

- Custom **meta tags** for search engines.
- **Open Graph** and **Twitter Card** images for better previewing on social media.
- **Keywords** optimized for "task management," "to-do lists," "productivity," and more.

This helps boost the visibility of the app in search engines and when shared on social media platforms.

---

## Contributing

We welcome contributions to **ToDoneHub**! To get started, follow these steps:

1. Fork the repository and clone your fork.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them.
4. Push your changes to your fork (`git push origin feature-name`).
5. Open a pull request from your fork's branch to the main repository.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

**ToDoneHub** is a productivity tool created by **Shiloh George**. For any questions or suggestions, feel free to reach out via GitHub issues or email.
