const mongoose = require('mongoose');
const Card = require('../models/Card');


const createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        const id = new mongoose.Types.ObjectId().toString();
        const newCard = new Card({ id, title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getAllCards = async (req, res) => {
    try {
        const cards = await Card.find({});
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const searchCards = async (req, res) => {
    try {
        const { title } = req.query;
        if (title) {
            const cards = await Card.find({ title: { $regex: title, $options: 'i' } }); 
            if (cards.length === 0) {
                return res.status(404).json({ error: 'No cards found' });
            }
            return res.status(200).json(cards);
        } else {
            const cards = await Card.find({});
            res.status(200).json(cards);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCard,
    getAllCards,
    searchCards
};
