# WattApp Backend

Backend server for WattApp energy monitoring application built with Express.js.

Tech Stack
Framework: Express.js
Language: JavaScript
Database: MongoDB with Mongoose
Authentication: JWT
Deployment: Render/Heroku/Railway
Prerequisites
Node.js (v14+)
npm or yarn
MongoDB
Getting Started
Installation

## Clone the repository

git clone <https://github.com/ibraheembello/wattapp-backend.git>

## Enter the project directory

cd wattapp-backend

## Install dependencies

npm install
Configuration
Copy .env.example to .env
bash
cp .env.example .env
Update the environment variables in .env with your settings
Running the app

## Development mode with auto-reload

npm run dev

## Production mode

npm start

Project Structure
src/
├── config/         # Application configuration
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── utils/          # Utility functions
├── app.js          # Express application setup
└── server.js       # Server entry point

API Endpoints
Users
GET /api/users - Get all users
GET /api/users/:id - Get user by ID
POST /api/users - Create a new user
PUT /api/users/:id - Update a user
DELETE /api/users/:id - Delete a user

Contributing
Create a new branch for your feature or bugfix
Make your changes
Submit a pull request to the main branch

CI/CD
This project uses GitHub Actions for CI/CD:

Automated tests on pull requests
Automatic deployment to Render/Heroku on merge to main

License
MIT Licensed
