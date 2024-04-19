const express = require('express');
const Article = require('./../models/article');
const router = express.Router();    

router.get('/', (req, res) => {
    res.send('In articles route');
});

router.get('/new', (req, res) => {
    // render a form for creating a new article
    res.render('articles/new', { article: new Article() });
});

router.get('/:slug', async (req, res) => {
    try{
        const article = await Article.findOne( {slug: req.params.slug} );
        if(article == null){
            res.redirect('/');
        }
        res.render('articles/show', { article: article });
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try {
        const newArticle = await article.save();
        res.redirect(`/articles/${newArticle.slug}`);
    } catch (error) {
        console.log(error);
        res.render('articles/new', { article: article });
    }
});









module.exports = router;