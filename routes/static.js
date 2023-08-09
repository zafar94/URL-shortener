const express = require('express');
const {
    handleAllURLs
} = require('../controllers/static');
const router = express.Router();


router.get('/', handleAllURLs);


module.exports = router;