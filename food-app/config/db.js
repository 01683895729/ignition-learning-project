const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To Database ${mongoose.connection.host}`.green);
  } catch (error) {
    console.error("DB Error:", error.message.red);
  }
};

module.exports = connectDb;
