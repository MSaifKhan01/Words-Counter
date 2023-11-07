const express = require('express');
const { AddUrl, GetData, MakeAsFavorite, RemoveHistory } = require('../Controller/wordCount');


const wordCountRouter = express.Router()

wordCountRouter.post("/addUrl",AddUrl)

wordCountRouter.get("/getData",GetData)

wordCountRouter.put("/update/:id",MakeAsFavorite)

wordCountRouter.delete("/delete/:id",RemoveHistory)

module.exports={
    wordCountRouter
}