const express = require('express');
const router = express.Router();
const { getVideos } = require('../controllers/videoController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getVideos);

module.exports = router;
