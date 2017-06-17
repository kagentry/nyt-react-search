// dependency
var mongoose = require("mongoose");

// create the schema class
var Schema = mongoose.Schema;

// instantiate a articleSchema object with the Schema class we just made
var ArticleSchema = new Schema({
	// itle of the stored article from nytimes.com
	// title of the nyt article is a string
	title: {
		type: String
	},
	// publish date and time of the article
	date: {
		type: Date
	},
	// URL of the article on nytimes.com
	url: {
		type: String
	}
});

// create the "Article" model with our ArticleSchema schema
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model, so it can be used in server.js with a require
module.exports = Article;