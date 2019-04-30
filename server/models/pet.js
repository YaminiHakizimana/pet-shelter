
var mongoose = require('mongoose')
// var uniqueValidator = require('mongoose-unique-validation');

mongoose.connect('mongodb://localhost/exam_db', (err)=>{
  console.log("connected to Mongod", err);
})

var petSchema = new mongoose.Schema({
  name: {type: String, required:[true,"Please enter pet name"], unique: [true, "name is taken"] , minlength:[3,"pet name must be greater than 3 characters"]},
  type: {type: String, required:[true,"please discribe pet type"], minlength:[3]},
  description: {type: String, required:[true,"please describe pet type"], minlength:[3]},
  description: {type: String},
  skill_one: {type: String},
  skill_two: {type: String},
  skill_three: {type: String},
  like: {type: Number}
}, {timestamps: true});

// petSchema.plugin(uniqueValidator,{type:'Name is already take please try anouther name'});

mongoose.model('pet', petSchema);
var pet = mongoose.model('pet')
module.exports =  pet;