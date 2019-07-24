'use strict';

var mongoose = require('monggose');
var Schema = moongose.Schema;

var BookSchema = new Schema({
    title: String,
    published:{
        type: Date,
        default: Date.now
    },
    keywords: Array,
    published: Boolean,
    author:{
        type: Schema.ObjectId,
        ref:'User'
    },
    detail:{
        modelNumber: Number,
        hardcoever: Boolean,
        reviews: Number,
        rank: Number
    }
});

module.exports = moongose.model('Book', BookSchema);