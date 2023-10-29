const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rubaanhasan123:7568427735@top-free.nhyf5wq.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

const logInSchema = new mongoose.Schema({
  form1Example1: {
    type: String,
    required: true,
  },
  form1Example2: {
    type: String,
    required: true,
  },
  
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  form1Example3: {
    type: String,
    required: true,
  },
  form1Example4: {
    type: String,
    required: true,
  },
  form1Example5: {
    type: String,
    required: true,
  },
});

// Define a schema for storing file and image details
const fileSchema = new mongoose.Schema({
  form3Example1: String,
  form3Example2: String,
  form3Example3: String,
  form3Example4: String, // 'file' or 'image'
  // Add more fields as needed for your application
});

// Create models based on the schemas
const LogInCollection = mongoose.model("collection", logInSchema);
const File = mongoose.model("File", fileSchema);

module.exports = { LogInCollection };
module.exports = { File };
