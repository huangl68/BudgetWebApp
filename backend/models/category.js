const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {category: []}
);

const Entry = mongoose.model('category', categorySchema);

module.exports =  Entry;