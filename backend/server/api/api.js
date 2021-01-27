const router = require('express').Router();

const categoryRoutes = require('./category/categoryRoutes');
const productRoutes = require('./product/productRoutes');
const subcategoryRoutes = require('./subcategory/subcategoryRoutes');
const userRoutes = require('./user/userRoutes');
const sellerRoutes = require('./seller/sellerRoutes');



router.use('/category-management', categoryRoutes);
router.use('/product-management', productRoutes);
router.use('/subcategory-management', subcategoryRoutes);
router.use('/user-management', userRoutes);
router.use('/seller-management', sellerRoutes);


module.exports = router;
