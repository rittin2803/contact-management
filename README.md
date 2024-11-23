# Contact Management App

A web application for efficient contact management. Built with React.js and Material UI on the frontend, backed by a robust Node.js/Express.js server and MongoDB database. Features a clean, responsive interface with comprehensive contact management capabilities including advanced search, categorization, and data validation.

## Features

### Core Functionality
- Create, view, update, and delete contacts (CRUD operations)
  
### User Experience
- Intuitive, responsive Material UI interface
- Form validation

### Technical Features
- REST API implementation
- MongoDB data consistency
- Error handling

## Technology Stack

### Frontend
- **React.js** - UI library
- **Material UI** - Framework
- **React Router** - Navigation
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database

### Development Tools
- **Postman** - API Testing
- **Prettier** - Code formatting

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- MongoDB (v4.0.0 or higher)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rittin2803/contact-management.git
cd contact-management
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Configure environment variables:
```bash
# In backend directory, create .env file
cp .env.example .env

# Edit .env with your configuration
For PORT, MONGO_URI
```

4. Start the development servers:
```bash
# Start backend server (from backend directory)
npm start

# Start frontend development server (from frontend directory)
npm start
```

The application will be available at `http://localhost:3001`

## API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Endpoints

#### Contacts
- `GET /contacts` - Get all contacts
- `POST /contacts` - Create new contact
- `PUT /contacts/:id` - Update contact
- `DELETE /contacts/:id` - Delete contact

## Project Structure
```
contact-management-app/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Database Schema

The **Contact** schema defines the structure for contact data in MongoDB:

```javascript
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true }
});

module.exports = mongoose.model('Contact', contactSchema);
```

## Project Description

The Contact Management App allows users to maintain a contact database for personal or professional use. It uses React.js and Material UI to create a modern, responsive interface. Users can perform basic CRUD operations such as adding, editing, viewing, and deleting contacts.

### Major Technical Decisions:
- **Frontend with React.js**: Chose React.js for building a responsive user interface with reusable components.
- **Material UI**: Used Material UI for quick styling with pre-built components.
- **Backend with Node.js and Express.js**: Chose Node.js and Express.js for a lightweight, fast backend API to handle CRUD operations.
- **MongoDB for Data Storage**: Used MongoDB for its flexibility and scalability for storing unstructured data.

### How Each Part of the App Works:
- **Frontend (React.js)**: 
  - The frontend is built using React.js, which handles the display of contacts and the creation or updating of contact forms.
  - Axios is used to send HTTP requests to the backend API.
  
- **Backend (Node.js + Express.js)**:
  - The backend provides RESTful endpoints for managing contacts.
  
- **Database (MongoDB)**:
  - MongoDB stores contact data as documents in a collection.

## Challenges and Solutions

### 1. **Form Validation**:
- **Challenge**: Ensuring proper validation of user inputs, particularly for email and phone number fields.
- **Solution**: 
  - Implemented client-side validation using regular expressions
  - Applied real-time validation with immediate user feedback
  - Added backend validation with Joi

### 2. **Asynchronous Data Fetching**:
- **Challenge**: Handling asynchronous data fetching and UI updates.
- **Solution**: Implemented React's `useEffect` hook for data fetching and state management.

### 3. **Handling API Requests**:
- **Challenge**: Ensuring smooth frontend-backend interaction and error handling.
- **Solution**: 
  - Used Axios for HTTP requests
  - Implemented comprehensive error handling on both ends
