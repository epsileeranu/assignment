const router = require('express').Router()
const controller = require('./userController')


router.param('id', controller.params);

router.route('/users')
  .get(controller.getUserList)
  .post(controller.postSingleUser)

router.route('/users/:id')
  .get(controller.getOne)
  .patch(controller.patchOne)
  .delete(controller.deleteOne)


module.exports = router
