
// Define a basic route

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://rubaanhasan:7568427735@cluster0.8eygicr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongo connected");
  })
  .catch(() => {
    console.log("FAILED");
  });

const logInSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  
  password: {
    type: String,
    required: true,
  },
});

const LogInCollection = new mongoose.model("syntax", logInSchema);

module.exports = LogInCollection;
