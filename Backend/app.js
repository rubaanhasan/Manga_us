const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

 const hbs = require("hbs")

const tempelatePath = path.join(__dirname, "../frontend/templates");
const publicPath = path.join(__dirname, "../frontend/public/CSS");
const faviconPath = path.join(__dirname, "../frontend");
const imagesPath = path.join(__dirname, "../frontend");

const LogInCollection = require("./mongodb");
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

console.log(publicPath);

app.set("view engine", "hbs");
app.set("views", tempelatePath); //default name of template folder is views that why we changing it to template path
app.use(express.static(publicPath));
app.use(express.static(imagesPath));
app.use(express.static(faviconPath));

// hbs.registerPartials(partialPath)
app.get('/', (req, res) => {
  res.render('index')
});
// app.get("/signup", (req, res) => {
//   res.render("signup");
// });
app.get('/login', (req, res) => {
  res.render('login');
});
// app.get("/about", (req, res) => {
//   res.render("about");
// });
// app.get("/contact", (req, res) => {
//   res.render("contact");
// });

app.post('/login', async (req, res) => {
  // const data = new LogInCollection({
  //     name: req.body.name,
  //     password: req.body.password
  // })
  // await data.save()
  console.log(req.body);
  const data = {
    email: req.body.email,
    password: req.body.password,
    cpassword: req.body.cpassword,
  };

  const checking = await LogInCollection.findOne({ email: req.body.email });

  console.log(checking);
  
  try {
    if (checking) {
      // Perform case-insensitive comparisons
      if (
        checking.email === req.body.email &&
        checking.userame === req.body.userame &&
        checking.password === req.body.password  
      ) {
        res.send("User details already exist");
        return;
      }
    }
    // If no matching user is found, insert the new user.
    await LogInCollection.insertMany([data]);
    //res.send("User registered successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred during registration");
  }

  res.status(201).render("home", {
    naming: req.body.name,
  });
});

//to work with mongodb we have to work with async and await fnc
app.post("/login", async (req, res) => {
  try {
    const check = await LogInCollection.findOne({ name: req.body.name });

    if (check.password === req.body.password) {
      res.status(201).render("home", { naming: `${req.body.name}` });
    } else {
      res.send("incorrect password");
    }
  } catch (e) {
    res.send("wrong details");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
