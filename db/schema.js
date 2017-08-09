var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var GameSchema = new Schema({
  user: String,
  points: Number,
  board: [Boolean],
  categories: [CategorySchema]
});

var CategorySchema = new Schema({
  name: String,
  questions: [QuestionSchema]
});

var QuestionSchema = new Schema({
  value: Number,
  question: String,
  answer: String
});

//var UserSchema = new Schema({
//  first_name: String,
//  email: { type: String, required: true, unique: true },
//  created_at: Date,
//  updated_at: Date,
//  items: [ItemSchema]
//});

//UserSchema.pre('save', function(next){
//  now = new Date();
//  this.updated_at = now;
//  if ( !this.created_at ) {
//    this.created_at = now;
//  }
//  next();
//});


var GameModel = mongoose.model("game", GameSchema);
var CategoryModel = mongoose.model("category", CategorySchema);
var QuestionModel = mongoose.model("question", QuestionSchem)

module.exports = {
  Game: GameModel,
  Category: CategoryModel,
  Question: QuestionModel
};