const router = require('express').Router();
const controller = require('./categoryController');


router.param('id', controller.params)

router.route('/categories')
  .get(controller.getCategoryList)
  .post(controller.postSingleCategory)

router.route('/categories/:id')
  .get(controller.getOne)
  .patch(controller.patchOne)
  .delete(controller.deleteOne);

module.exports = router;
