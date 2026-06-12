### Project Description

This is a Node.js-based RESTful API designed to manage a bookstore inventory efficiently. It provides a robust backend architecture for performing CRUD operations, allowing users to create, read, update, and delete book entries, ensuring data integrity and seamless API interactions.

### Requirements Implemented

* **RESTful API**: Built using Express.js to handle HTTP requests (GET, POST, PUT, DELETE) for bookstore management.
* **Database Integration**: Utilizes MongoDB with Mongoose for efficient data storage and schema validation.
* **Environment Configuration**: Uses `dotenv` for secure management of sensitive configuration variables like database connection strings.
* **Code Refactoring (Modular Design)**: Logic is strictly separated into Controllers, Routes, and Models to ensure clean, scalable, and maintainable code.
* **Real-time Development**: Integrated with Nodemon for automated server restarts during development, enhancing productivity.

### Setup Instructions

1. **Initialize Project**: Clone the repository and run `npm install` to install all dependencies.
2. **Environment Setup**: Create a `.env` file in the root directory and add your `MONGO_URI`.
3. **Run Application**: Use `npm run dev` to start the server in development mode.
4. **Testing**: Use Postman to send requests to the API endpoints (`/api/books`) to verify CRUD operations.
