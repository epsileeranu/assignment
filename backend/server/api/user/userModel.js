const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const firstNameValidation = {
  type: Schema.Types.String,
  trim: true,
  required: true,
  default: 'Anonymous'
};
const middleNameValidation = {
  type: Schema.Types.String,
  trim: true,
  default: ''
};
const lastNameValidation = {
  type: Schema.Types.String,
  trim: true,
  default: ''
};
const imageLinkValidation = {
  type: Schema.Types.String,
  default: "https://picsum.photos/100"
};
const genderValidation = {
  type: Schema.Types.String,
  enum: ['male', 'female', 'other', ''],
  default: ''
};
const emailValidation = {
  type: Schema.Types.String,
  unique: true,
  trim: true,
  required: true
};
const contactNumberValidation = {
  type: Schema.Types.String,
  default: '',
  trim: true,
  unique: false
};
const dateValidation = {
  type: Schema.Types.Number,
  default: 0,
  required: true
};
const addressValidation = {
  id: String,
  //_id: mongoose.Types.ObjectId,
  firstName: firstNameValidation,
  middleName: middleNameValidation,
  lastName: lastNameValidation,
  contactNumber: contactNumberValidation,
  pinCode: Schema.Types.String,
  areaStree: Schema.Types.String,
  cityDistrictTown: Schema.Types.String,
  state: Schema.Types.String,
  alternateContactNumber: Schema.Types.String,
  addressType: {
    type: Schema.Types.String,
    enum: ['Home', 'Work', 'Other'],
    default: 'Home',
    required: true
  },
  createdAt: dateValidation
};


const User = new Schema({
  id: String,
  firstName: firstNameValidation,
  middleName: middleNameValidation,
  lastName: lastNameValidation,
  image: imageLinkValidation,
  gender: genderValidation,
  email: emailValidation,
  contactNumber: contactNumberValidation,
  addresses: [addressValidation],
  createdAt: dateValidation
});

const userModel = mongoose.model('User', User);
module.exports = userModel;
