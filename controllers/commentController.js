// Import the required modules
const Comment = require('../models/Comment');
const jwt = require('jsonwebtoken');

// إضافة تعليق
exports.addComment = async (req, res) => {
    const { text } = req.body;
    try {
        const newComment = new Comment({
            text,
            user: req.user.id,  // قم بتخزين معرف المستخدم الذي كتب التعليق
        });
        await newComment.save();
        res.status(201).json({ message: 'Comment added successfully!', comment: newComment });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add comment.', error: error.message });
    }
};

// حذف التعليق
exports.deleteComment = async (req, res) => {
    const commentId = req.params.id;

    try {
        const comment = await Comment.findById(commentId);

        // التحقق من وجود التعليق
        if (!comment) {
            r
eturn res.status(404).json({ message: 'Comment not found.' });
        }

        // التحقق من أن المستخدم الحالي هو صاحب التعليق
        if (comment.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'You are not authorized to delete this comment.' });
        }

        await comment.remove();
        res.status(200).json({ message: 'Comment deleted successfully!' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete comment.', error: error.message });
    }   };
