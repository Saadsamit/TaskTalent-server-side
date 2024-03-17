const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cluster0.amhrtlq.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(url, { dbName: "TaskTalent" });
};

module.exports = connectDB;
