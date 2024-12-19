# Fitnest
FitNest is a full-stack fitness web application built with the MERN (MongoDB, Express, React, Node.js) stack. It allows users to register, log in, and manage their workouts and fitness routines. The app provides a simple and intuitive interface to track fitness progress and access personal workout details.

# Features
User Authentication: Secure registration and login functionality.
Workout Management: Users can create, update, and delete workouts.
Responsive Design: A responsive UI for seamless use on desktop and mobile devices.
Secure Data: Data stored securely in a MongoDB database.
Technology Stack
Frontend: React, React Bootstrap, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Token (JWT) and bcrypt for password hashing
Installation
Prerequisites
Ensure you have the following software installed:

Node.js (v14 or later)
npm or yarn
MongoDB (locally installed or using a cloud service like MongoDB Atlas)
Setup Steps
Clone the repository:


git clone https://github.com/irfankahn/FitNest.git
Navigate to the project folder:


cd FitNest
Install dependencies for the backend:


cd backend
npm install
Install dependencies for the frontend:


cd ../frontend
npm install
Create a .env file in the backend folder and add the following variables:

Run the backend server:


cd ../backend
npm start
Run the frontend server:


cd ../frontend
npm start
The frontend should now be running on http://localhost:3000, and the backend on http://localhost:5001.

# Usage
Register a New User
Navigate to the Register page on the frontend.
Fill in the registration form with your name, email, and password.
Submit the form to create a new account.
Log In
Go to the Login page.
Enter your email and password.
Submit the form to log in and receive a token for authentication.
Manage Workouts
After logging in, navigate to the Dashboard page.
View, create, update, or delete workouts as needed.
Project Structure
Backend (backend/)
server.js: Entry point for the backend server.
controllers/userController.js: Contains logic for user registration and login.
models/User.js: Mongoose schema for user data.
routes/userRoutes.js: Routes for user-related endpoints.
routes/workoutRoutes.js: Routes for workout-related endpoints.
Frontend (frontend/)
src/components/Navbar.js: Navigation bar component.
src/components/WorkoutCard.js: Component to display individual workouts.
src/pages/Home.js: Home page.
src/pages/Register.js: User registration page.
src/pages/Login.js: User login page.
src/pages/Dashboard.js: Dashboard to display and manage workouts.
Screenshots
Login Page

Dashboard Page

# Deployment
You can deploy the frontend on platforms like Vercel or Netlify and the backend on Heroku, Render, or DigitalOcean.

Deployment Tips
Ensure the backend and frontend are connected by setting the appropriate environment variables and API URLs.
Use a secure MongoDB connection (consider MongoDB Atlas for cloud hosting).
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m 'Add feature').
Push to the branch (git push origin feature-branch).
Create a pull request.
License
This project is licensed under the MIT License. You are free to use, modify, and distribute this code as long as you include the license.

# Acknowledgements
MERN Stack for powering the app.
React Bootstrap and Tailwind CSS for styling.
MongoDB for the database.
JWT and bcrypt for secure authentication.
