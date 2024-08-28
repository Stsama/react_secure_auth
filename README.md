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




====================================== Version Française ====================================== 


# react_secure_auth

## Vue d'ensemble

**react_secure_auth** est une application MERN axée sur l'amélioration de la sécurité grâce à l'authentification à deux facteurs (2FA). Ce projet démontre des pratiques d'authentification sécurisées, y compris le hachage des mots de passe, l'authentification JWT, et le 2FA pour protéger les comptes utilisateurs.

## Fonctionnalités

- **Authentification des utilisateurs** : Inscription et connexion sécurisées des utilisateurs utilisant JWT.
- **Authentification à deux facteurs (2FA)** : Ajoute une couche supplémentaire de sécurité en exigeant une seconde forme de vérification.
- **Hachage des mots de passe** : Utilise bcrypt pour hacher les mots de passe avant de les stocker dans la base de données.
- **Authentification par jeton** : Utilise JSON Web Tokens (JWT) pour gérer les sessions utilisateurs de manière sécurisée.
- **Variables d'environnement** : Variables d'environnement configurables pour les informations sensibles telles que les secrets JWT et les clés API.

## Pile technologique

- **Frontend** : React.js
- **Backend** : Node.js avec Express.js
- **Base de données** : MongoDB (MongoDB Atlas)
- **Authentification** : JWT, bcrypt, 2FA (utilisant Google Authenticator ou similaire)
- **Docker** : Dockerisé pour un déploiement facile
- **CI/CD** : GitHub Actions
- **Contrôle de version** : Git

## Prise en main

### Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre environnement de développement local :

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (Atlas ou instance locale)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/yourusername/react_secure_auth.git
   cd react_secure_auth
2. Installer les dépendances pour le frontend et le backend :

  # Installer les dépendances du backend
  cd backend
  npm install

  # Installer les dépendances du frontend
  cd ../frontend
  npm install

3. Variables d'environnement :

  # Créez un fichier .env dans le répertoire backend et remplissez-le avec les informations suivantes :

    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

4. Exécuter l'application :
  ```bash
  # Exécuter le backend
  cd backend
  npm start

  # Exécuter le frontend
  cd ../frontend
  npm start

5. Configuration Docker (Optionnel) :
  # Si vous préférez utiliser Docker, construisez et exécutez les conteneurs :
  ```bash
  docker-compose up --build

## Contribution
  # Les contributions sont les bienvenues ! Veuillez suivre le flux de travail Git standard :
  1. Forker le dépôt.
  2. Créer votre branche de fonctionnalité (git checkout -b feature/votre-fonctionnalité).
  3. Commiter vos modifications (git commit -m 'Ajouter une fonctionnalité').
  4. Pousser vers la branche (git push origin feature/votre-fonctionnalité).
  5. Ouvrir une Pull Request.

## Licence
  Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

## Remerciements
  1. bcrypt pour le hachage des mots de passe.
  2. jsonwebtoken pour la gestion des jetons.
  3. Google Authenticator pour le 2FA.