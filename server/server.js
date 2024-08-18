
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cardsRoutes = require('./routes/cards');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://deshwalamit339:qyvXGHMkIteSBnf3@cluster0.qqu4f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});


app.use('/cards', cardsRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// // qyvXGHMkIteSBnf3