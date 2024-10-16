const mongoose = require("mongoose");

const phraseSchema = new mongoose.Schema({
  phrase: String,
});

const Phrase = mongoose.model("Phrase", phraseSchema);

module.exports = Phrase;
