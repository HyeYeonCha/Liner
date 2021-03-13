const express = require('express');
const highlightControllers = require('../controllers/highlight');

const router = express.Router();

router.post('/create', highlightControllers.create);
router.patch('/update/highlight', highlightControllers.updateHighlight);
router.patch('/update/theme', highlightControllers.updateTheme);
router.delete('/delete', highlightControllers.delete);
router.post('/read/user', highlightControllers.readUser);
router.post('/read/page', highlightControllers.readPage);

module.exports = router;
