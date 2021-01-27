const Subcategory = require('./subcategoryModel');
const Product = require('../product/productModel');

removeSomeDetails = (obj)=>{
  // let modifiedSubcategory = {...obj._doc};
  // delete modifiedSubcategory.__v;
  // return modifiedSubcategory;
  return obj;
};
const removeSubcategoryDetails = (subcategory) => {
  const {_id, name, description, image, status, createdAt, lastModifiedAt } = subcategory;
  return { _id, name, description, image, status, createdAt, lastModifiedAt };
};
const removeProductDetails = (product) => {
  const {
    _id, subcategoryId, name, description, status, rating,
    price, sale, images, shipping, tags, count, createdAt, lastModifiedAt
  } = product;

  return {
    _id, subcategoryId, name, description, status, rating,
    price, sale, images, shipping, tags, count, createdAt, lastModifiedAt
  };
};

exports.params = (req, res, next, id)=>{
  Subcategory.findById(id)
    .then((subcategory)=>{
      if(!subcategory){
        res.json({msg: `No such subcategory with id: ${id}`});
      }else{
        req.subcategory = subcategory;
        next();
      }
    }, (err)=>{
      res.json({msg: "Server Error"});
      next(err);
    });
};

exports.getSubcategoryList = (req, res, next)=>{
  Subcategory.find({})
    .exec()
    .then(subcategories => subcategories.map(subcategory => removeSubcategoryDetails(subcategory)))
    .then((subcategories)=>{
      res.status(202).json(subcategories);
    })
    .catch(err => {
      res.json({msg: err});
      next(err);
    });
};

exports.postSingleSubcategory = (req, res, next)=>{
  const newSubcategory = new Subcategory(req.body);
  newSubcategory.save((err, saved)=>{
    if(err){
      res.json({msg: err});
      return next(err);
    }else{
      res.status(201).json({msg: `subcategory created with id ${saved._id}`});
    }
  });
};


exports.getOne = (req, res, next)=>{
  const {
    _id, categoryId, name, description, image, status, createdAt, lastModifiedAt
  } = req.subcategory;

  Product.find({subcategoryId: req.subcategory.id})
    .exec()
    .then(products => products.map(product => removeProductDetails(product)))
    .then(products => {
      const subcategory = {
        _id, categoryId, name, description, image, status, createdAt, lastModifiedAt, products
      };
      res.status(202).json(subcategory);
    })
    .catch(err => {
      res.json({msg: err});
      return next(err);
    });
};

exports.patchOne = ((req, res, next)=>{
  // if document have nested document update key explicity
  let subcategory = req.subcategory;
  let update = req.body;

  const image = {...req.subcategory.image, ...req.body.image};
  const imageObj = {
    image: {mobile: image.mobile, desktop: image.desktop}
  };

  Object.assign(subcategory, update, imageObj);
  subcategory.save((err, saved)=>{
    if(err){
      // if property key not matched for update doc to database doc no error return
      res.json({msg: err});
      next(err)
    }else{
      res.json(removeSomeDetails(saved))
    }
  });
});

exports.deleteOne = (req, res, next)=>{
  req.subcategory.remove((err, removed)=>{
    if(err){
      res.json({msg: err});
      return next(err)
    }else{
      res.json({msg: `subcategory removed with id: ${removed._id}`});
    }
  });
};
