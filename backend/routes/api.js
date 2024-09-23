const express = require('express');
const router = express.Router();

// Rotta di esempio
router.get('/', (req, res) => {
  res.send('API funzionante');
});

module.exports = router;
