const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `Database Connected at Host ${connect.connection.host}`.bgBlack.blue
        .underline
    );
  } catch (err) {
    console.log("Database Not Connected".bgRed.black, err.message);
  }
};

module.exports = connectDb;
