const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const nameValidation = {
  type: String,
  lowercase: true,
  trim: true,
  unique: true,
  required: true,
};
const descriptionValidation = {
  type: String,
  minLength: 0,
  maxLength: 100,  
  trim: true,
  required: true,
};
const statusValidation = {
  display: {
    type: Boolean,
    default: true,
    required: true
  }
};
const imageValidation = {
  mobile: {
    type: String,
    required: false
  },
  desktop: {
    type: String,
    required: false
  }
};
const dateValidation = {
  type: Number,
  default: 0,
  required: true
};

const CategorySchema = new Schema({
  id: {type: String},
  name: nameValidation,
  description: descriptionValidation,
  image: imageValidation,
  status: statusValidation,
  createdAt: dateValidation,
  lastModifiedAt: dateValidation
});

CategorySchema.methods = {};

categoryModel = mongoose.model('Category', CategorySchema);
module.exports = categoryModel;