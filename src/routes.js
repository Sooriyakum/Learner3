  
const { Router } = require('express');

const cmsContent = require('./api/cmscontent/cms.routes');

const router = Router();

router.get('/', (req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', 'https://difuza.com/');
  res.end();
});

router.use('/cmscontent', cmsContent);

module.exports = router;
