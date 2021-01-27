const Category = require('./categoryModel');
const Subcategory = require('../subcategory/subcategoryModel');

removeSomeDetails = (obj)=>{
  // let modifiedCategory = {...obj._doc};
  // delete modifiedCategory.__v;
  // return modifiedCategory;
  return obj;
};

const removeSubcategoryDetails = (subcategory) => {
  const {_id, name, description, image, status, createdAt, lastModifiedAt } = subcategory;
  return { _id, name, description, image, status, createdAt, lastModifiedAt };
};
const removeCategoryDetails = (category)=>{
  const {_id, name, description, image, status, createdAt, lastModifiedAt} = category;
  return {_id, name, description, image, status, createdAt, lastModifiedAt};
};

exports.params = (req, res, next, id)=>{
  Category.findById(id)
    .then((category)=>{
      if(!category){
        res.json({msg: `No such category with id: ${id}`});
      }else{
        req.category = category;
        next();
      }
    })
    .catch(err => {
      res.json({msg: "Server Error"});
      next(err);
    });
};

exports.getCategoryList = (req, res, next)=>{
  Category.find({})
    .exec()
    .then(categories => categories.map(category => removeCategoryDetails(category)))
    .then(categories => {
      res.status(202).json(categories);
    })
    .catch(err => {
      res.json({msg: err});
      next(err);
    });
};

exports.postSingleCategory = (req, res, next)=>{
  const newCategory = new Category(req.body);
  newCategory.save((err, saved)=>{
    if(err){
      res.json({msg: err});
      return next(err);
    }else{
      res.status(201).json({msg: `document created with id ${saved._id}`});
    }
  });
};


exports.getOne = (req, res, next)=>{
  const {
    _id, status, createdAt, lastModifiedAt, name, description, image
  } = req.category;

  Subcategory.find({categoryId: req.category.id})
    .exec()
    .then(subcategories => subcategories.map(subcategory => removeSubcategoryDetails(subcategory)))
    .then((subcategories) => {
      const category = {
        _id, name, description, image, status, createdAt, lastModifiedAt, subcategories
      };
      res.status(202).json(category);
    })
    .catch(err=> {
      res.json({msg: err});
      return next(err);
    });
};

exports.patchOne = ((req, res, next)=>{
  const reqImage = {...req.category.image, ...req.body.image};
  const imageObj = {
    image: {mobile: reqImage.mobile, desktop: reqImage.desktop}
  };

  const {
    name = req.category.name,
    description = req.category.description,
    image = {...req.category.image},
    status = {...req.category.status},
    createdAt = req.category.createdAt,
    lastModifiedAt = req.category.lastModifiedAt,
    subcategories = [...req.category.subcategories]
  } = req.body;

  const updates = {
    name, description, image, status,
    createdAt, lastModifiedAt, subcategories
  };

  Object.assign(category, updates, imageObj);
  category.save((err, saved)=>{
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
  req.category.remove((err, removed)=>{
    if(err){
      res.json({msg: err});
      return next(err)
    }else{
      res.json({msg: `category removed with id: ${removed._id}`});
    }
  });
};
