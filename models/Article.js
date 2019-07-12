var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var ArticleSchema = new Schema({
  // headline, a string, must be entered
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // summary, a string, must be entered
  summary: {
    type: String,
    required: true
  },
  // url, a string, must be entered
  url: {
    type: String,
    required: true
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Headline model using the headlineSchema
var Headline = mongoose.model("Headline", ArticleSchema);

// Export the Headline model
module.exports = Headline;


// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
