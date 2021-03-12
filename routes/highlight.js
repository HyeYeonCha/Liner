const express = require('express');
const highlightControllers = require('../controllers/highlight');

const router = express.Router();

router.post('/create', highlightControllers.create);
router.post('/update/highlight', highlightControllers.updateHighlight);
router.post('/update/theme', highlightControllers.updateTheme);
router.post('/delete', highlightControllers.delete);
router.post('/read/user', highlightControllers.readUser);
router.post('/read/page', highlightControllers.readPage);

module.exports = router;
