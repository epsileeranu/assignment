const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryIdValidation = {
  type: Schema.Types.String,
  required: true,
  ref: 'Category'
};
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

const SubcategorySchema = new Schema({
  id: {type: String},
  categoryId: categoryIdValidation,
  name: nameValidation,
  description: descriptionValidation,
  image: imageValidation,
  status: statusValidation,
  createdAt: dateValidation,
  lastModifiedAt: dateValidation
});

SubcategorySchema.methods = {};

subcategoryModel = mongoose.model('Subcategory', SubcategorySchema);
module.exports = subcategoryModel;