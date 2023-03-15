const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text"],
    },
    bookId: {
      type: Number,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
