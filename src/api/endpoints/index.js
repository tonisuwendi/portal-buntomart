import { fetchPOST } from '../config';

const endpoints = {
    insertTestimonial: 'testimonial',
    checkReferenceCode: 'checkout/reference-code',
    checkCouponCode: 'checkout/coupon-code',
};

export const insertTestimonial = (payload) => fetchPOST(endpoints.insertTestimonial, payload);
export const checkReferenceCode = (payload) => fetchPOST(endpoints.checkReferenceCode, payload);
export const checkCouponCode = (payload) => fetchPOST(endpoints.checkCouponCode, payload);
