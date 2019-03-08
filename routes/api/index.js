const express = require('express');
const mstRouter = require('./mst.js');

const router = express.Router();

router.use('/mst', mstRouter);

module.exports = router;
