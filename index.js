const express = require('express');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/static');
const path = require('path')

const app = express();
const PORT = 8001;

const { connectToMongoDB } = require('./connect')

connectToMongoDB("mongodb://localhost:27017/url-shortener").then(() => {
    console.log('MongoDB connected')
})

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/', staticRoute);
app.use('/url', urlRoute);




app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT}`));

