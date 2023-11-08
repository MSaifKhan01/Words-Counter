const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const dns = require("dns");
const { wordCountRouter } = require("./Routes/WordCounter.Router");
const { connection } = require("./Config/db");



// Creating an Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config()

app.use("/url",wordCountRouter)


 



app.listen(process.env.PORT, async() => {
  try {
    await connection
    console.log("Connected To DB")
  } catch (error) {
    console.log(error)
  }
  console.log(`Server is running`);
});
