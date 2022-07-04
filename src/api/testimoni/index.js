/* eslint-disable import/prefer-default-export */
import { fetchPOST } from '../config';

const endpoints = {
    insertTestimonial: 'testimonial',
};

export const insertTestimonial = (payload) => fetchPOST(endpoints.insertTestimonial, payload);
