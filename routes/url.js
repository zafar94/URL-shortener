const express = require('express');
const router = express.Router();
const {
    handleGenerateNewShortURL,
    handleRedirection,
    handleGetAnalytics
} = require('../controllers/url');


router.post('/', handleGenerateNewShortURL);

router.get('/:shortId', handleRedirection);

router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;