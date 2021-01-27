const Seller = require('./sellerModel');

const removeSellerDetails = (seller) => {
  return seller;
};


exports.params = (req, res, next, id) => {
  Seller.findById(id)
    .then(seller => {
      if(!seller){
        res.status(200).json({msg: `No such seller with id ${id}`});
      }else{
        req.seller = seller;
        next();
      }
    })
    .catch(err => {
      res.status(200).json({msg: err});
      next(err);
    });
};

exports.getSellerList = (req, res, next) => {
  Seller.find({})
    .exec()
    .then(sellers => sellers.map(seller => removeSellerDetails(seller)))
    .then(sellers => {
      res.status(200).json(sellers);
    })
    .catch(err => {
      res.status(200).json({msg: err});
      next(err);
    });
};

exports.postSingleSeller = (req, res, next) => {
  const newSeller = new Seller(req.body);
  newSeller.save((err, saved) => {
    if(err){
      res.status(200).json({msg: err});
    }else{
      res.status(200).json({msg: `Seller created with id ${saved._id}`});
    }
  });
};

exports.getOne = (req, res, next) => {
  const seller = removeSellerDetails(req.seller);
  res.status(200).json(seller);
};

exports.patchOne = (req, res, next) => {
  let seller = req.seller;

  const {
    firstName = req.seller.firstName,
    middleName = req.seller.middleName,
    lastName = req.seller.lastName,
    dob = req.seller.dob,
    image = req.seller.image,
    email = req.seller.email,
    contactNumber = req.seller.contactNumber,
    address = {...req.seller.address},
    createdAt = req.seller.createdAt,
    identity = {...req.seller.identity},
    accountDetails = {...req.seller.accountDetails}
  } = req.body;

  const updates = {
    firstName, middleName, lastName,
    dob, image, email, contactNumber,
    address, createdAt, identity,
    accountDetails
  };

  Object.assign(seller, updates);
  seller.save((err, saved) => {
    if(err){
      res.status(200).json({msg: err});
    }else{
      res.status(200).json(removeSellerDetails(seller));
    }
  });
};
exports.deleteOne = (req, res, next)=>{
  req.seller.remove((err, removed)=>{
    if(err){
      res.json({msg: err});
      return next(err)
    }else{
      res.json({msg: `seller removed with id: ${removed._id}`});
    }
  });
};

