require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const bodyParser = require("body-parser");
const Article = require('./models/article');
const methodOverride = require('method-override');
const app = express();

const mongoURL = process.env.MONGODB_URL;

// Connect to MongoDB database using Mongoose
mongoose.connect(mongoURL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

app.set('view engine', 'ejs');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(methodOverride('_method'))



app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index' , { articles: articles });
});

app.use('/articles', articleRouter);

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:5000');
});