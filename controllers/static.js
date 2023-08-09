const URL = require('../models/url');

async function handleAllURLs(req, res) {
    const allURLs = await URL.find({});
    res.render('home', { urls: allURLs })
}

module.exports = {
    handleAllURLs
}