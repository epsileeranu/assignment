const Product = require('./productModel');

const removeProductDetails = (product) => {
  const {
    _id, subcategoryId, sellerId, name, description, status, rating, price,
    sale, images, shipping, tags, count, createdAt, lastModifiedAt
  } = product;
  return {
    _id, subcategoryId, sellerId, name, description, status, rating, price,
    sale, images, shipping, tags, count, createdAt, lastModifiedAt
  };
};


exports.params = (req, res, next, id)=>{
  Product.findById(id)
    .then(product => {
      if(!product){
        res.json({msg: `No such product with id: ${id}`});
      }else{
        req.product = product;
        next();
      }
    })
    .catch(err => {
      res.json({msg: err});
      next(err);
    });
};

exports.getProductList = (req, res, next)=>{
  Product.find({})
    .exec()
    .then(products => products.map(product => removeProductDetails(product)))
    .then(products => {
      res.status(202).json(products)
    })
    .catch(err => {
      res.status(200).json({msg: err});
      next(err);
    })
};
exports.postSingleProduct = (req, res, next)=>{
  const newProduct = new Product(req.body);
  newProduct.save((err, saved) => {
    if(err){
      res.status(202).json({msg: err});
    }else{
      res.status(202).json({msg: `Product created with id ${saved._id}`});
    }
  });
};

exports.getOne = (req, res, next)=>{
  const product = removeProductDetails(req.product);
  res.status(200).json(product);
};

exports.patchOne = (req, res, next)=>{
  let product = req.product;
  const {
    subcategoryId = req.product.subcategoryId,
    sellerId = req.product.sellerId,
    name = req.product.name,
    description = req.product.description,
    status = {...req.product.status},
    rating = req.product.rating,
    price = req.product.price,
    sale = {...req.product.sale},
    images = [...req.product.images],
    shipping = {...req.product.shipping},
    tags = [...req.product.tags],
    count = req.product.count,
    createdAt = req.product.createdAt,
    lastModifiedAt = req.product.lastModifiedAt
  } = req.body;

  const updates = {
    subcategoryId,
    sellerId,
    name,
    description,
    status,
    rating,
    price,
    sale,
    images,
    shipping,
    tags,
    count,
    createdAt,
    lastModifiedAt
  };

  Object.assign(product, updates);
  product.save((err, saved)=>{
    if(err){
      res.status(200).json({msg: err});
    }else{
      res.status(200).json(removeProductDetails(saved));
    }
  });
};

exports.deleteOne = (req, res, next)=>{
  req.product.remove((err, removed)=>{
    if(err){
      res.status(200).json({msg: err});
    }else{
      res.status(200).json({msg: `Product removed with id ${removed._id}`});
    }
  });
};
