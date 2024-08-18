const express = require('express');
const router = express.Router();
const { createCard, getAllCards, searchCards } = require('../controllers/cardsController');


router.post('/', createCard);
router.get('/', getAllCards);
router.get('/search', searchCards);

module.exports = router;
