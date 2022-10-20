/*
** var expire is the targeted Div that will be moved
** .woocommerce-product-details__short-description -  This is the class in which after the targeted div will added

*** Learn more about jQuery insertAfter: https://api.jquery.com/insertAfter/#selector
*/

//Move the expire element after the div with class .woocommerce-product-details__short-description
var expire = document.querySelector(".wps_gw_expiry_notice");

$(expire).insertAfter(".woocommerce-product-details__short-description");
