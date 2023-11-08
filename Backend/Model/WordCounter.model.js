const mongoose = require("mongoose");
const IPModel = require('./IP.Model');

const WordCounterSchema = mongoose.Schema({
    IP: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IP', // it is referencing to IP Document which in IPModel
      },
    url: String,
    wordCount: Number,
    isFavorite: Boolean,
    imageUrls: [String]
});

const WordCounterModel = new mongoose.model("WordCounter", WordCounterSchema);

module.exports = { WordCounterModel };