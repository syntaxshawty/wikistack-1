var express = require('express')
//imports html for /wiki/add
const { addPage } = require('../views')
//import in our page model/table
const { Page } = require('../models')

var router = express.Router()

router.get('/', async(req, res) => {
    res.send('retrieve all wiki pages!')
})

router.get('/add', async(req, res) => {
  res.send(addPage())
})

router.get('/:slug', async (req, res, next) => {
  try {
    const foundPage = await Page.findOne({
      where: {slug: req.params.slug}
    });
    res.json(foundPage);

  } catch (error) {
    next(error)
  }


  //res.send(`hit dynamic route at ${req.params.slug}`);
});


router.post('/', async(req, res) => {

  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.pageContent
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }

})



module.exports = router;
