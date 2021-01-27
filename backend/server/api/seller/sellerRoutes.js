const router = require('express').Router()
const controller = require('./sellerController')


router.param('id', controller.params);

router.route('/sellers')
  .get(controller.getSellerList)
  .post(controller.postSingleSeller)

router.route('/sellers/:id')
  .get(controller.getOne)
  .patch(controller.patchOne)
  .delete(controller.deleteOne)


module.exports = router;
