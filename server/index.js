const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");
const connectDb = require("../server/config/connectDB");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
dotenv.config();
connectDb();
app.get("/", (req, res) => {
  res.send("Hello");
});

//user routes
app.use("/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server Running on http://localhost:${process.env.PORT}`.yellow.underline
      .bgBlack
  );
});
