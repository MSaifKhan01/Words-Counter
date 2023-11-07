const axios = require("axios"); 
const cheerio = require("cheerio"); 

// In-memory storage for search history
const searchHistory = [];

const AddUrl= async(req,res)=>{

    const { url } = req.body;
    try {
      // Making a request to the URL using Axios
      const response = await axios.get(url);
  
      if (response.status === 200) {
        //  HTML content from the webpage
        const htmlContent = response.data;
        // console.log(htmlContent)
  
        // Load the HTML content into Cheerio
        const $ = cheerio.load(htmlContent);
        // console.log($)
  
        // Extracting image URLs
        const imageUrls = [];
        $("img").each((index, element) => {
          const imageUrl = $(element).attr("src"); 
          if (imageUrl) {
            imageUrls.push(imageUrl);
          }
        });
        console.log(imageUrls);
  
        const textContent = $("body").text();
        // console.log(textContent)
  
        // Split the text content into words (using space as the delimiter)
        const words = textContent.split(" ");
        // console.log(words)
  
        let filteredArr = words.filter((ele, ind) => {
          return ele.trim() !== "";
        });
        // console.log(filteredArr)
        let wordCount = filteredArr.length;
  
        // For simplicity, we're just storing the URL and word count in the search history.
        searchHistory.push({
          url,
          wordCount,
          isFavorite: false,
          imageUrls,
         
        });

        // res.send({ message: "Insights saved successfully", searchHistory });
        res.status(201).send({ message: "Insights saved successfully", searchHistory });
      } else {
        return res.status(500).send({ message: "Failed to fetch URL " });
      }
    } catch (error) {
      return res.status(500).send({ message: "Error while fetching URL " });
    }
} 
// 2. Getting the data - GET method
const GetData= async(req,res)=>{
    try {
        return res.status(200).send({ searchHistory });
    } catch (error) {
        return res.status(500).send({ message: "Error while fetching History Data " });
    }

}

const MakeAsFavorite=async(req,res)=>{
    try {

        const id = req.params.id;
        // Marking the entry as a favorite
        searchHistory[id].isFavorite = true;
        console.log(searchHistory[id]);
        return res.status(200).send({ message: "Insight marked as favorite" });
       
        
    } catch (error) {
        return res.status(500).send({ message: "Error while making History Data  MakeAsFavorite " });
    }
}

const RemoveHistory=async(req,res)=>{
    try {
        const id = req.params.id;
        // Removing the entry from search history
        searchHistory.splice(id, 1);
        return res.status(204).send({ message: "Url History removed successfully" });
    } catch (error) {
        return res.status(500).send({ message: "Error while Removing History Data " });
    }
}

module.exports={
    AddUrl,GetData,MakeAsFavorite,RemoveHistory
}