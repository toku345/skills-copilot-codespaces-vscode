// Create web server
var express = require('express');
var router = express.Router();
var comments = require('../controllers/comments');

// GET /comments
router.get('/', comments.findAll);

// GET /comments/:id
router.get('/:id', comments.findById);

// POST /comments
router.post('/', comments.add);

// PUT /comments/:id
router.put('/:id', comments.update);

// DELETE /comments/:id
router.delete('/:id', comments.delete);

module.exports = router;
