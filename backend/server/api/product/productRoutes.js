const router = require('express').Router();
const controller = require('./productController');


router.param('id', controller.params);

router.route('/products')
  .get(controller.getProductList)
  .post(controller.postSingleProduct);

router.route('/products/:id')
  .get(controller.getOne)
  .patch(controller.patchOne)
  .delete(controller.deleteOne);



module.exports = router;

