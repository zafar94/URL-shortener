const express = require('express');
const app = express();
const PORT = 8001;

const { connectToMongoDB } = require('./connect')

connectToMongoDB("mongodb://localhost:27017/url-shortener").then(() => {
    console.log('MongoDB connected')
})

const urlRoute = require('./routes/url');

app.use(express.json());
app.use('/url', urlRoute);


app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT}`));

