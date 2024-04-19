const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/articles', articleRouter);


app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Description 2'
    }];
    res.render('index' , { articles: articles });
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});