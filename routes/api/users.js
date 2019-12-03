const express = require('express');
const router = express.Router();
const { check, validationResult } = require

// @route GET api/users
// @desc Register User
// @access Public
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('user successfully added');
});

module.exports = router;