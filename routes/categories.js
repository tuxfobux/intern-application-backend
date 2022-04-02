const express = require('express');
const router = express.Router();

/*
  @desc    List all categories
  @route   GET /
*/
router.get('/', (req, res) => {
    res.json("test");
})

module.exports = router;