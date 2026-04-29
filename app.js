const express = require("express");
const router = require("./routes/index");
const app = express();
const session = require("express-session");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "MEONGG",
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: true,
      secure: false,
    },
  }),
);

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
