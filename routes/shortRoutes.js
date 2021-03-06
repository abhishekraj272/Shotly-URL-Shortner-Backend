const router = require('express').Router();
const controller = require('../controller/shortController');

router.get('/', (req, res) => {res.redirect('https://app.sotly.co')});

router.post('/api/v1/shorten', controller.shortUrl);

router.get('/:urlCode', controller.urlRedirect);

module.exports = router;
