const express = require('express');
const router = express.Router();    

router.get('/', (req, res) => {
    res.send('In articles route');
});

router.get('/new', (req, res) => {
    // render a form for creating a new article
    res.render('articles/new');
});

router.post('/', (req, res) => {
    // create a new article
    

});









module.exports = router;