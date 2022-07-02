import { fetchPOST } from "../config";

const endpoints = {
    insertTestimonial: 'testimonial',
};

export const insertTestimonial = (payload) => fetchPOST(endpoints.insertTestimonial, payload);
