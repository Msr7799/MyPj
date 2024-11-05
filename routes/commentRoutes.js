const express = require('express');
const router = express.Router();
const commentController = require('./controllers/commentController');

// Create a new comment
router.post('/comments', commentController.createComment);

// Get all comments
router.get('/comments', commentController.getComments);

// Get a comment by ID
router.get('/comments/:id', commentController.getCommentById);

// Update a comment
router.put('/comments/:id', commentController.updateComment);

// Delete a comment (only the user who created it or an admin can delete)
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;
