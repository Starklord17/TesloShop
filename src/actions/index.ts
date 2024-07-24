// export * from "./product/product-pagination";
// export * from "./product/get-product-by-slug";
// export * from "./product/get-stock-by-slug";
// export * from "./product/create-update-product";

export { getPaginatedProductsWithImages } from "./product/product-pagination";
export { getProductBySlug } from "./product/get-product-by-slug";
export { getStockBySlug } from "./product/get-stock-by-slug";
export { createUpdateProduct } from "./product/create-update-product";

// export * from "./auth/login";
export {authenticate, login} from "./auth/login";
// export * from "./auth/logout";
export {logout} from "./auth/logout";
// export * from "./auth/register";
export {registerUser} from "./auth/register";

// export * from "./country/get-countries";
export {getCountries} from "./country/get-countries";

// export * from "./address/set-user-address";
export {setUserAddress} from "./address/set-user-address";
// export * from "./address/delete-user-address";
export {deleteUserAddress} from "./address/delete-user-address";
// export * from "./address/get-user-address";
export {getUserAddress} from "./address/get-user-address";

// export * from "./order/place-order";
export {placeOrder} from "./order/place-order";
// export * from "./order/get-orders-by-user";
export {getOrdersByUser} from "./order/get-orders-by-user";
// export * from "./order/get-order-by-id";
export {getOrderById} from "./order/get-order-by-id";
// export * from "./order/get-paginated-orders";
export {getPaginatedOrders} from "./order/get-paginated-orders";

// export * from "./payments/set-transaction-id";
export {setTransactionId} from "./payments/set-transaction-id";
// export * from "./payments/paypal-check-payment";
export {paypalCheckPayment} from "./payments/paypal-check-payment";

// export * from "./user/get-paginated-users";
export {getPaginatedUsers} from "./user/get-paginated-users";
// export * from "./user/change-user-role";
export {changeUserRole} from "./user/change-user-role";

export {getCategories} from "./category/get-categories";