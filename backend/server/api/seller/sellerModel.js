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
  pinCode: Schema.Types.String,
  areaStree: Schema.Types.String,
  cityDistrictTown: Schema.Types.String,
  state: Schema.Types.String,
  alternateContactNumber: Schema.Types.String,
  addressType: {
    type: Schema.Types.String,
    enum: ['Home', 'Work', 'Other'],
    default: 'Work',
    required: true
  },
};
const aadhaarNumberValidation = {
  type: Schema.Types.String,
  trim: true,
  minLength: 12,
  maxLength: 12,
  required: true
};
const panNumberValidation = {
  type: Schema.Types.String,
  trim: true,
  minLength: 10,
  maxLength: 10,
  required: false
};
const accountDetailsValidation = {
  accountNumber: {
    type: Schema.Types.String,
    trim: true,
    minLength: 9,
    maxLength: 18,
    required: true
  },
  ifsc: {
    type: Schema.Types.String,
    trim: true,
    minLength: 8,
    maxLength: 50,
    required: true
  },
  accountHolderName: {
    type: Schema.Types.String,
    trim: true,
    minLength: 3,
    maxLength: 100,
    required: true
  },
  contactNumber: {
    type: Schema.Types.String,
    trim: true,
    required: true
  }
};


const Seller = new Schema({
  id: String,
  firstName: firstNameValidation,
  middleName: middleNameValidation,
  lastName: lastNameValidation,
  dob: dateValidation,
  image: imageLinkValidation,
  gender: genderValidation,
  email: emailValidation,
  contactNumber: contactNumberValidation,
  address: addressValidation,
  createdAt: dateValidation,
  identity: {
    aadhaarNumber: aadhaarNumberValidation,
    panNumber: panNumberValidation
  },
  accountDetails: accountDetailsValidation
});

const sellerModel = mongoose.model('Seller', Seller);
module.exports = sellerModel;
