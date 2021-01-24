var express = require('express')

var router = express.Router()

router.get('/', async(req, res) => {
    res.send('retrieve all wiki pages!')
})

// router.post('/', async(req, res) = {
//     res.send('posted!')
// })
 
router.get('/add', async(req, res) => {
  res.send('retrieve the add a page form!')
})

module.exports = router; 