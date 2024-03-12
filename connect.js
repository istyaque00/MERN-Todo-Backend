const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://istyaque6:zafar135@cluster0.zejjqx2.mongodb.net/todo-app?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("connected to DB...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
