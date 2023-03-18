const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/error");

// Basic express config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// user routes
app.use("/users", require("./routes/userRoutes"));

// comments routes
app.use("/comments", require("./routes/commentRoutes"));

// error middleware
app.use(errorHandler);

// Db connection
connectDB()
  .then((_) => {
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((err) => console.log(err));
