import * as actionTypes from './actionTypes';


// placeOrder
export const placeOrder = (
  user = {
    userId: '',
    addressId: '',
    deliveryNotes: '',
  },
  tracking = {
    trackingId: '',
    status: '',
    estimatedDelivery: 0
  },
  payment = {
    method: '',
    transactionId: ''
  },
  products = [
    {productId: '', subcategoryId: '', categoryId: '', count: 0}
  ]
)=>({
  type: actionTypes.PLACE_ORDER,
  order: {
    id: '',
    user: {
      userId: user.userId,
      addressId: user.addressId,
      deliveryNotes: user.deliveryNotes
    },
    tracking: {
      trackingId: tracking.trackingId,
      status: tracking.status,
      estimatedDelivery: tracking.estimatedDelivery
    },
    payment: {
      method: payment.method,
      transactionId: payment.transactionId
    },
    products: [...products],
    createdAt: 0
  }
});
// editOrder
