const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer"); // Add multer for file uploads
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const LogInCollection = require("./mongodb"); // Import you

//const hbs = require("hbs");

const tempelatePath = path.join(__dirname, "../frontend/templates");
const publicPath = path.join(__dirname, "../frontend/public/CSS");
const faviconPath = path.join(__dirname, "../frontend");
const imagesPath = path.join(__dirname, "../frontend");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log(publicPath);

app.set("view engine", "hbs");
app.set("views", tempelatePath);
app.use(express.static(publicPath));
app.use(express.static(imagesPath));
app.use(express.static(faviconPath));

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Multer setup for file uploads
// Create a GridFS storage engine
const storage = new GridFsStorage({
  url: "mongodb+srv://rubaanhasan:7568427735@cluster0.8eygicr.mongodb.net/?retryWrites=true&w=majority", // Replace with your MongoDB Atlas connection URI
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      filename: file.originalname,
      bucketName: "uploads",
    };
  },
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/upload", (req, res) => {
  res.render("upload");
});


const upload = multer({ storage });

app.use(express.json());

// Define a route for file upload
app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  // Save information about the uploaded file to MongoDB Atlas
  const { originalname, filename, id } = req.file;
  const fileInfo = {
    form3Example1,
    form3Example2,
    form3Example3: id,
    form3Example4: file.mimetype.startsWith("image") ? "image" : "file",
    // Add more fields as needed for your application
  };

  try {
    // Create a new document in the File collection
    const fileDoc = new File(fileInfo);
    await fileDoc.save();
    res.redirect('/afterlogin')
    res.status(200).json({ message: "File uploaded successfully.", fileInfo });
  } catch (error) {
    console.error("Error while saving file to MongoDB:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});






app.post("/signup", async (req, res) => {
  console.log(req.body);
  const data = {

    form1Example1: req.body.form1Example1,
    form1Example2: req.body.form1Example2,
    name: req.body.name,
    password: req.body.password,
    form1Example5: req.body.form1Example5,
    form1Example6: req.body.form1Example6,
  };
  //es.redirect('/login')
  // const check = await LogInCollection.findOne({ form1Example5: req.body.form1Example5 });
  
  // console.log(check);
  
  try {
    // if (checking) {
    //   // Perform case-insensitive comparisons
    //   if (
    //     checking.form1Example5 === req.body.form1Example5 &&
    //     checking.name === req.body.name &&
    //     checking.password === req.body.password  
    //   ) {
    //     res.send("User details already exist");
    //     return;
    //   }
    // }
    // If no matching user is found, insert the new user.
    // await LogInCollection.insertMany([data]);
    //const newUser = await LogInCollection.create(data);
    // res.redirect('/login')
    res.send("User registered successfully");
  } catch (err) {
    console.error(err);
    // res.status(500).send("Error occurred during registration");
    res.redirect('/login')
  }

  res.status(201).render("index", {
    naming: req.body.name,
  });
});
//   await LogInCollection.insertMany([data]);
//   res.render("login");
// });

app.post("/login", async (req, res) => {
  try {
    //const check = await LogInCollection.findOne({ name: req.body.name });

    if (check.password === req.body.password) {
      res.redirect('/afterlogin')
      // res.status(201).render("afterlogin");
    } else {
      res.redirect('/afterlogin')
      //es.send("incorrect password");
    }
  } catch {
    res.send("wrong details");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
