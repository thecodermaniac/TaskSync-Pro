const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: true,
    });
    console.log(`MongoDB connected successfully : ${connect.connection.host}`);
  } catch (error) {
    console.log(`error while connectiong to Mongo database: ${error.message}`);
    process.exit(1);
  }
};

module.exports = dbConnection;
