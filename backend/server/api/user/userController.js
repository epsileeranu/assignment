const User = require('./userModel');

const removeUserDetails = (user) => {
  return user;
};


exports.params = (req, res, next, id) => {
  User.findById(id)
    .then(user => {
      if(!user){
        res.status(200).json({msg: `No such user with id ${id}`});
      }else{
        req.user = user;
        next();
      }
    })
    .catch(err => {
      res.status(200).json({msg: err});
      next(err);
    });
};

exports.getUserList = (req, res, next) => {
  User.find({})
    .exec()
    .then(users => users.map(user => removeUserDetails(user)))
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(200).json({msg: err});
      next(err);
    });
};

exports.postSingleUser = (req, res, next) => {
  const newUser = new User(req.body);
  newUser.save((err, saved) => {
    if(err){
      res.status(200).json({msg: err});
    }else{
      res.status(200).json({msg: `User created with id ${saved._id}`});
    }
  });
};

exports.getOne = (req, res, next) => {
  const user = removeUserDetails(req.user);
  res.status(200).json(user);
};

exports.patchOne = (req, res, next) => {
  let user = req.user;
  let update = req.body;

  Object.assign(user, update);
  user.save((err, saved) => {
    if(err){
      res.status(200).json({msg: err});
    }else{
      res.status(200).json(removeUserDetails(user));
    }
  });
};
exports.deleteOne = (req, res, next)=>{
  req.user.remove((err, removed)=>{
    if(err){
      res.json({msg: err});
      return next(err)
    }else{
      res.json({msg: `user removed with id: ${removed._id}`});
    }
  });
};

