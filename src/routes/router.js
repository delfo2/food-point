const express = require('express');
const router = express();

const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');
const eventRoutes = require('./eventRoutes');
const pageRoutes = require("./pageRoutes");

router.use(pageRoutes);
router.use(loginRoutes);
router.use(userRoutes);
router.use(eventRoutes);

module.exports = router;