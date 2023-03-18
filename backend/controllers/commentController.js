const asyncHandler = require("express-async-handler");
const Comment = require("../models/commentModel");
const User = require("../models/userModel");

// @desc    GET comments
// @route   GET /api/goals
// @acces   Private
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({ user: req.user.id });
  res.status(200).json(comments);
});

// @desc    POST comments
// @route   POST /api/goals
// @acces   Private
const setComment = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }
  password2;

  const comment = await Comment.create({
    username: req.user.id,
    text: req.body.text,
    bookId: req.body.bookId,
  });

  res.status(200).json(comment);
});

// @desc    PUT comment
// @route   PUT /api/books/:id
// @access  Private
const updateComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  const comment = await Comment.findById(id);

  if (!comment) {
    res.status(400);
    throw new Error("Comment not found");
  }

  //   Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //   Make sure the logged in user matches the comment user
  if (comment.username !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updateComment = await Comment.findByIdAndUpdate(
    id,
    { text },
    {
      new: true,
    }
  );

  res.status(200).json(updateComment);
});

// @desc    DELETE comment
// @route   DELETE /api/:id
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const comment = await Comment.findById(id);

  if (!comment) {
    res.status(400);
    throw new Error("Comment not found");
  }

  //   Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //   Make sure the logged in user matches the comment user
  if (comment.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await comment.remove();

  res.status(200).json({ id: id });
});

module.exports = {
  getComments,
  setComment,
  updateComment,
  deleteComment,
};
