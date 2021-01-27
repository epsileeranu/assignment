const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subcategoryIdValidation = {
  type: Schema.Types.String,
  required: true,
  ref: 'Subcategory'
};
const sellerIdValidation = {
  type: Schema.Types.String,
  required: true,
  ref: 'Subcategory'
};
const nameValidation = {
  type: Schema.Types.String,
  lowercase: true,
  trim: true,
  unique: true,
  required: true
};
const descriptionValidation = {
  type: Schema.Types.String,
  trim: true,
  minLength: 0,
  maxLength: 100,
  required: true
};
const statusValidation = {
  display: {
    type: Schema.Types.Boolean,
    default: true,
    required: true
  }
};
const ratingValidation = {
  type: Schema.Types.Number,
  min: 0,
  max: 5,
  default: 0,
  required: true
};
const priceValidation = {
  type: Schema.Types.Number,
  default: 0,
  required: true
};
const dateValidation = {
  type: Schema.Types.Number,
  default: 0,
  required: true
};
const saleValidation = {
  price: priceValidation,
  saleEndAt: dateValidation
};
const imagesValidation = {
  type: [Schema.Types.String]
};
const shippingValidation = {
  height: {
    type: Schema.Types.Number,
    default: 0,
    required: true
  },
  weight: {
    type: Schema.Types.Number,
    default: 0,
    required: true
  },
  length: {
    type: Schema.Types.Number,
    default: 0,
    required: true
  },
  width: {
    type: Schema.Types.Number,
    default: 0,
    required: true
  }
};
const tagsValidation = {
  type: [Schema.Types.String]
};
const countValidation = {
  type: Schema.Types.Number,
  default: 0,
  required: true
};

const ProductSchema = new Schema({
  id: {type: String},
  subcategoryId: subcategoryIdValidation,
  sellerId: sellerIdValidation,
  name: nameValidation,
  description: descriptionValidation,
  status: statusValidation,
  rating: ratingValidation,
  price: priceValidation,
  sale: saleValidation,
  images: imagesValidation,
  shipping: shippingValidation,
  tags: tagsValidation,
  count: countValidation,
  createdAt: dateValidation,
  lastModifiedAt: dateValidation
});

ProductSchema.methods = {};

productModel = mongoose.model('Product', ProductSchema);
module.exports = productModel;
