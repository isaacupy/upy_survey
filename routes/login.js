const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.redirect('../survey');
});

module.exports = router;
