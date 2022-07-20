export const INITIAL_STATE = {
    isCreateAccount: true,
    fullName: '',
    email: '',
    password: '',
    referenceCode: '',
    referenceDiscount: 0,
    paymentMethod: '',
    couponCode: '',
    couponDiscount: 0,
    setIsCreateAccount: () => {},
    setFullName: () => {},
    setEmail: () => {},
    setPassword: () => {},
    setReferenceCode: () => {},
    setReferenceDiscount: () => {},
    setPaymentMethod: () => {},
    setCouponCode: () => {},
    setCouponDiscount: () => {},
    setInitialState: () => {},
};

export const ACTION_TYPE = {
    SET_IS_CREATE_ACCOUNT: 'SET_IS_CREATE_ACCOUNT',
    SET_FULL_NAME: 'SET_FULL_NAME',
    SET_EMAIL: 'SET_EMAIL',
    SET_PASSWORD: 'SET_PASSWORD',
    SET_REFERENCE_CODE: 'SET_REFERENCE_CODE',
    SET_REFERENCE_DISCOUNT: 'SET_REFERENCE_DISCOUNT',
    SET_PAYMENT_METHOD: 'SET_PAYMENT_METHOD',
    SET_COUPON_CODE: 'SET_COUPON_CODE',
    SET_COUPON_DISCOUNT: 'SET_COUPON_DISCOUNT',
    SET_INITIAL_STATE: 'SET_INITIAL_STATE',
};
