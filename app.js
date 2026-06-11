const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');
app.use('/api', bookRoutes);

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

app.get('/', (req, res) => {
    res.send('Bookstore API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});