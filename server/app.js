const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");


const dbConfig = require('./config/dbConfig');

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect Database
dbConfig();

const contactRoutes = require('./routes/contact');
app.use('/api/v1', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
