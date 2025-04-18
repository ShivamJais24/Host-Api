const mongoose = require("mongoose");

// const uri = "mongodb+srv://shivamjaiswal:AQkY0iFFo2uX1chO@cluster0.niuk32q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongodb+srv://atlas-sample-dataset-load-67ff7861c4c3f44764c9f31b:<db_password>@cluster0.niuk32q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const connectdb = async (uri) => {
  try {
    console.log("Connecting to DB...");
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error.message);
  }
};

module.exports = connectdb;
