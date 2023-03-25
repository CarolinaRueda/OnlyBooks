const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register new user
// @route   GET /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if username exist
  const usernameExists = await User.findOne({ username });

  if (usernameExists) {
    res.status(400);

    throw new Error("Username already exist");
  }

  //   Check if email exist
  const emailExists = await User.findOne({ email });

  if (emailExists) {
    res.status(400);

    throw new Error("Email already exist");
  }

  //   Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //   Create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    library: [],
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //   Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    GET user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res) => {
  res.status(200).json(req.user);
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// @desc    POST user library
// @route   POST /api/users/library
// @access  Private
const addToLibrary = asyncHandler(async (req, res) => {
  const { userId, bookId } = req.body;

  const exist = await User.findOne({ library: { $in: [bookId] } });

  if (!exist) {
    const updated = await User.findByIdAndUpdate(
      userId,
      { $push: { library: bookId } },
      { new: true }
    );

    res.json({ updated });
  } else {
    res.status(400);
    throw new Error("Invalid info book");
  }
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
