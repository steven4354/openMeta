var mongoose = require('mongoose');
var bluebird = require('bluebird');

mongoose.Promise = bluebird;

var models = {};

// models.Cart = require('./cart');

module.exports = models;

// 
// {
//   id: 54982384,
//   hist: [
//     {id: 54982384, time: // time forked },
//     {id: 54982324, time: // time forked },
//     ...
//   ],
//   data: {
//      top-level: {
//      },
//      inclusion: {
//         included: [],
//         excluded: []
//      },
//      analyses: [
//        {
//          type: text [/graphic],
//          content: ""
//        },
//        {
//          type: graphic,
//          content: {
//            // Edwin's dustbin data
//          }
//        },
//      ]
//
//
//   }
// }