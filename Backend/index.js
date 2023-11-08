const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { wordCountRouter } = require("./Routes/WordCounter.Router");


// Creating an Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/",wordCountRouter)


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
