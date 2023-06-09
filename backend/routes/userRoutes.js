const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const protect = require("../middleware/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
