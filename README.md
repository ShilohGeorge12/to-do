# ToDo Application - Client Side

This is the client-side of the **ToDo Application**, which was developed as part of a **Full Stack Engineer Assessment** for an internship at Sleeky Programmers. The
application allows users to create, read, update, and delete todo items with support for pagination.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies and Tools](#technologies-and-tools)
3. [Installation Instructions](#installation-instructions)
4. [Running the Application](#running-the-application)
5. [Features](#features)
6. [Contributing](#contributing)
7. [License](#license)

## Project Overview

This is a **ToDo Application** built as part of a full-stack internship assessment. The client-side application interacts with a backend API and provides users with the
ability to:

- **Create**, **Read**, **Update**, and **Delete** todo items.
- **Pagination** functionality for managing large sets of tasks.

It utilizes modern web technologies to ensure a smooth and responsive user experience.

## Technologies and Tools

The following technologies and tools are used in the development of the client-side application:

- **React**: JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling the application.
- **Framer Motion**: Library for animations in React.
- **shad/cn**: Classnames utility for conditional CSS classes.
- **SWR**: React hooks library for data fetching and caching.
- **React Router DOM**: Declarative routing for React applications.
- **React Icons**: Icon library for including SVG icons in the app.

## Installation Instructions

To run the application locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/ShilohGeorge12/to-do.git
```

### 2. Install dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd todo-application-client
npm install
```

### 3. Set up the environment

Create a `.env` file in the root directory of the project and add the following variable:

```
VITE_BACKEND_URL=http://localhost:5000/api
```

Make sure to replace `http://localhost:5000/api` with the actual URL of your backend API if it's hosted elsewhere.

### 4. Start the development server

Once the dependencies are installed and the environment variables are set, you can start the development server:

```bash
npm run dev
```

This will start the application on [http://localhost:2234](http://localhost:2234) (or the URL specified in your terminal).

## Running the Application

Once the application is running, navigate to [http://localhost:2234](http://localhost:2234) in your browser.

You can interact with the ToDo items by performing the following actions:

- **Create**: Add a new todo item.
- **Update**: Edit an existing todo item.
- **Delete**: Remove a todo item.
- **Pagination**: Navigate through pages of todo items.

## Features

- **CRUD Functionality**:
  - Create new todos.
  - Update existing todos.
  - Delete todos.
  - View todos on different pages.
- **Pagination**:
  - Supports pagination to handle large lists of todo items, allowing users to view todos in a paginated manner.

## Contributing

If you would like to contribute to the project, feel free to fork the repository and submit pull requests. You can help by:

- Fixing bugs or issues.
- Adding new features.
- Improving documentation.

### Code of Conduct

Please ensure that your contributions are respectful and adhere to common open-source community standards.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
