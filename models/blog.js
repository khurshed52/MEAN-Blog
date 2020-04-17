const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:  String,
    author: String,
    date:   Date, 
    content:   String
  }, {collection: 'Bloglist'});

  const Blog = mongoose.model('Blog', blogSchema);

  module.exports = Blog
