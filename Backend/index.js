const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { wordCountRouter } = require("./Routes/WordCounter.Router");
// const axios = require("axios"); 
// const cheerio = require("cheerio"); 

// Creating an Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/",wordCountRouter)

// // In-memory storage for search history
// const searchHistory = [];

// // 1. Adding Url - POST method
// app.post("/addUrl", async (req, res) => {
//   const { url } = req.body;

//   try {
//     // Making a request to the URL using Axios

//     const response = await axios.get(url);

//     if (response.status === 200) {
//       //  HTML content from the webpage
//       const htmlContent = response.data;
//       // console.log(htmlContent)

//       // Load the HTML content into Cheerio
//       const $ = cheerio.load(htmlContent);
//       console.log($)

      

//       // Extract image URLs
//       const imageUrls = [];
//       $("img").each((index, element) => {
//         const imageUrl = $(element).attr("src"); // Assuming image URLs are in the 'src' attribute
//         if (imageUrl) {
//           imageUrls.push(imageUrl);
//         }
//       });

//       // console.log("Image URLs:", imageUrls);

    

//       const textContent = $("body").text();
//       // console.log(textContent)

//       // Split the text content into words (using space as the delimiter)
//       const words = textContent.split(" ");
//       // console.log(words)

//       let filteredArr = words.filter((ele, ind) => {
//         return ele.trim() !== "";
//       });
//       // console.log(filteredArr)
//       let wordCount = filteredArr.length;

//       // For simplicity, we're just storing the URL and word count in the search history.
//       searchHistory.push({
//         url,
//         wordCount,
//         isFavorite: false,
//         imageUrls,
//         videoUrls,
//       });
//       res.send({ message: "Insights saved successfully", searchHistory });
//     } else {
//       res.status(500).json({ message: "Failed to fetch URL " });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error while fetching URL " });
//   }
// });

// // 2. Getting the data - GET method
// app.get("/getData", (req, res) => {
//   res.send({ searchHistory });
// });

// // 3. Removing a particular Url - DEL method
// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   // Remove the entry from search history
//   searchHistory.splice(id, 1);
//   res.json({ message: "Url History removed successfully" });
// });

// // 4. Updating The Data - UPDATE method
// app.put("/update/:id", (req, res) => {
//   const id = req.params.id;
//   // Marking the entry as a favorite
//   searchHistory[id].isFavorite = true;
//   console.log(searchHistory[id]);
//   res.json({ message: "Insight marked as favorite" });
// });

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
