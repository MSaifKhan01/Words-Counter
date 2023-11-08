
const axios = require('axios');
const cheerio = require('cheerio');



const { WordCounterModel } = require('../Model/WordCounter.model');
const IPModel = require('../Model/IP.Model');

// Adding URL to the MongoDB
const AddUrl = async (req, res) => {
  const { url } = req.body;
  const userIp = req.ip; 

  // const userIp="::8"

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const htmlContent = response.data;
      const $ = cheerio.load(htmlContent);

      const imageUrls = [];
      $('img').each((index, element) => {
        const imageUrl = $(element).attr('src');
        if (imageUrl) {
          imageUrls.push(imageUrl);
        }
      });

      const textContent = $('body').text();
      const words = textContent.split(' ');
      const filteredArr = words.filter((ele) =>{
        return ele.trim() !== '';
      }) 
      const wordCount = filteredArr.length;

      //  findind the IP document by its ipAddress
      const ipDocument = await IPModel.findOne({ ipAddress: userIp });

      // If the IP not present,then creating
      if (!ipDocument) {
        const newIP = new IPModel({ ipAddress: userIp });
        await newIP.save();
      }

      // Creating the WordCounter document with the IP reference
      const wordCounter = new WordCounterModel({
        IP: ipDocument._id, // Referencing to the IP document by its _id
        url,
        wordCount,
        isFavorite: false,
        imageUrls,
      });

      await wordCounter.save();

      res.status(201).send({ message: 'Url history saved successfully', wordCounter });
    } else {
      return res.status(500).send({ message: 'Failed to fetch URL' });
    }
  } catch (error) {
    return res.status(500).send({ message: 'Error while fetching URL' });
  }
};

// Geting Url History from MongoDB
const GetData = async (req, res) => {
  const userIp = req.ip;
  // const userIp="::8"
  try {
    const ipDocument = await IPModel.findOne({ ipAddress: userIp });

    if (!ipDocument) {
      return res.status(404).send({ message: 'IP not found' });
    }

    const searchHistory = await WordCounterModel.find({ IP: ipDocument._id }).populate('IP');// it is referencing to IP(which is in Populate) Document which in IPModel


    
    return res.status(200).send({ searchHistory });
  } catch (error) {
    return res.status(500).send({ message: 'Error while fetching History Data' });
  }
};

const MakeAsFavorite = async (req, res) => {
  try {
    const id = req.params.id;
    

    const updatedInsight = await WordCounterModel.findByIdAndUpdate(
      { _id: id}, 
      { isFavorite: true },
    );

    if (!updatedInsight) {
      
      return res.status(404).send({ message: 'Insight not found' });
    }

  
    return res.status(200).send({ message: 'Insight marked as favorite', updatedInsight });
  } catch (error) {
    
    return res.status(500).send({ message: 'Error while making Insight as favorite' });
  }
};


// Removing an url History from MongoDB
const RemoveHistory = async (req, res) => {
  try {
    const id = req.params.id;
    const removedUrl = await WordCounterModel.findByIdAndDelete({ _id: id });

    if (!removedUrl) {
      return res.status(404).send({ message: 'Url not found' });
    }

    return res.status(204).send({ message: 'Url removed successfully' });
  } catch (error) {
    return res.status(500).send({ message: 'Error while removing History Data' });
  }
};


module.exports = {
  AddUrl,
  GetData,
  MakeAsFavorite,
  RemoveHistory,
};
