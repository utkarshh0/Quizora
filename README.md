# Quizora (Online Quiz Application)

## Project Overview

This project is a RESTful API for a basic online quiz application developed using Node.js and Express.js. The application enables user authentication and MCQ quiz management, allowing users to register, log in, create quizzes, take quizzes, and view results.

## Assignment Objective

The aim of this assignment is to assess skills in building backend services with a focus on RESTful APIs.

## Features

- **User Authentication**: 
  - Register users with secure password hashing.
  - Login functionality with JWT-based authentication.

- **MCQ Quiz Management**: 
  - Structure quizzes with multiple-choice questions (MCQs).
  - Get all quizzes and their details.
  - Take a quiz and view results.

### MCQ Specifications
- Each MCQ has a single correct answer and four options.

## Tech Stack

- **Backend**: 
  - Node.js
  - Express.js
  - Mongoose (for MongoDB interaction)
  - bcryptjs (for password hashing)
  - jsonwebtoken (for authentication)
  - dotenv (for managing environment variables)

## How to Clone the Project

1. Open your terminal.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:

   ```bash
   git clone https://github.com/utkarshh0/quizora
   ```

   ```bash
   cd quizora
   ```

   ```bash
   npm install
   ```

   ```bash
   npm run start
   ```


   ## Environment Variables
   Create a .env file in the root of your project and add the following environment variables:

   ```bash
    PORT=your_port_number
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
   ```
## API Endpoints

### User Authentication

- **POST** `/auth/signup`: Register a new user.
- **POST** `/auth/signin`: Login an existing user.

### Quiz Management

- **POST** `/quiz`: Create a new quiz.
- **GET** `/quiz`: Get all quizzes.
- **GET** `/quiz/:id`: Get details of a specific quiz.
- **POST** `/quiz/take/:id`: Take a quiz and submit answers.
- **GET** `/quiz/users/:userId/quizzes/:quizId/result`: View results of a taken quiz.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.





