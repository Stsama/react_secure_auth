# react_secure_auth

## Overview

**react_secure_auth** is a MERN stack application focused on enhancing security through two-factor authentication (2FA). This project demonstrates secure authentication practices, including password hashing, JWT authentication, and 2FA to protect user accounts.

## Features

- **User Authentication**: Secure user registration and login using JWT.
- **Two-Factor Authentication (2FA)**: Adds an extra layer of security by requiring a second form of verification.
- **Password Hashing**: Utilizes bcrypt to hash passwords before storing them in the database.
- **Token-Based Authentication**: Uses JSON Web Tokens (JWT) to manage user sessions securely.
- **Environment Variables**: Configurable environment variables for sensitive information like JWT secrets and API keys.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: JWT, bcrypt, 2FA (using Google Authenticator or similar)
- **Docker**: Dockerized for easy deployment
- **CI/CD**: GitHub Action
- **Version Control**: Git

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development environment:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (Atlas or local instance)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/react_secure_auth.git
   cd react_secure_auth

2. **Install dependencies for both frontend and backend:**
    # Install backend dependencies

    ```bash
    cd backend
    npm install

    # Install frontend dependencies
    ```bash
    cd backend
    npm install

3. **Environment Variables:**
    # Create a .env file in the backend directory and populate it with the following:
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

4. Run the application:
    # Run backend
    cd backend
    npm start

    # Run frontend
    cd ../frontend
    npm start

5. Docker Setup (Optional):
    # If you prefer using Docker, build and run the containers:
    docker-compose up --build


## Contributing
    # Contributions are welcome! Please follow the standard Git workflow:
    1. Fork the repository.
    2. Create your feature branch (git checkout -b feature/your-feature).
    3. Commit your changes (git commit -m 'Add some feature').
    4. Push to the branch (git push origin feature/your-feature).
    5. Open a Pull Request.

## License
    This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
    - bcrypt for password hashing.
    - jsonwebtoken for managing tokens.
    - Google Authenticator for 2FA.