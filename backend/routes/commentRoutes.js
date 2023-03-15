const router = require("express").Router();
const {
  getComments,
  setComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const protect = require("../middleware/auth");

router.use(protect);

router.route("/").get(getComments).post(setComment);

router.route("/:id").put(updateComment).delete(deleteComment);

module.exports = router;
