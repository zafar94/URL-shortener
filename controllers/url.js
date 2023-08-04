const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    const shortId = shortid();

    if (!body.url) return res.status(400).json({ error: 'URL is required!' })

    await URL.create({
        shortId,
        redirectURL: body.url,
        visitHistory: []
    })

    return res.status(200).json({ shortId })
}

async function handleRedirection(req, res) {
    const shortId = req.params.shortId;
    const data = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timeStamp: Date.now(),
                }
            }
        }
    )
    res.redirect(data.redirectURL)
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId })

    return res.status(200).json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedirection,
    handleGetAnalytics,
}