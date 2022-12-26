const express = require("express");
const app = express();

require("dotenv").config();
// console.log(process.env); // remove this after you've confirmed it is working
// console.log("process.env.PORT:", process.env.PORT);
// console.log("process.env.PORT type:", typeof process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://127.0.0.1:${process.env.PORT}`);
});
