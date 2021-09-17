const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema(
    {category: {type: String, required: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true}},

    {timestamps: true}
);

const Entry = mongoose.model('Entry', entrySchema);

module.exports =  Entry;