/* eslint-disable react/jsx-no-constructed-context-values */

import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { ACTION_TYPE, INITIAL_STATE } from './checkoutUtils';

const CheckoutContext = createContext(INITIAL_STATE);

const checkoutReducer = (state, action) => {
    const { value } = action;
    switch (action.type) {
    case ACTION_TYPE.SET_IS_CREATE_ACCOUNT:
        return { ...state, isCreateAccount: value };
    case ACTION_TYPE.SET_FULL_NAME:
        return { ...state, fullName: value };
    case ACTION_TYPE.SET_EMAIL:
        return { ...state, email: value };
    case ACTION_TYPE.SET_PASSWORD:
        return { ...state, password: value };
    case ACTION_TYPE.SET_REFERENCE_CODE:
        return { ...state, referenceCode: value };
    case ACTION_TYPE.SET_REFERENCE_DISCOUNT:
        return { ...state, referenceDiscount: value };
    case ACTION_TYPE.SET_PAYMENT_METHOD:
        return { ...state, paymentMethod: value };
    case ACTION_TYPE.SET_COUPON_CODE:
        return { ...state, couponCode: value };
    case ACTION_TYPE.SET_COUPON_DISCOUNT:
        return { ...state, couponDiscount: value };
    case ACTION_TYPE.SET_UNIQ_CODE:
        return { ...state, uniqCode: value };
    case ACTION_TYPE.SET_TOTAL_BILL:
        return { ...state, totalBill: value };
    case ACTION_TYPE.SET_INITIAL_STATE:
        return INITIAL_STATE;
    default:
        throw new Error();
    }
};

export function CheckoutProvider({ children }) {
    const [state, dispatch] = useReducer(checkoutReducer, INITIAL_STATE);

    const checkoutValues = {
        isCreateAccount: state.isCreateAccount,
        fullName: state.fullName,
        email: state.email,
        password: state.password,
        referenceCode: state.referenceCode,
        referenceDiscount: state.referenceDiscount,
        paymentMethod: state.paymentMethod,
        couponCode: state.couponCode,
        couponDiscount: state.couponDiscount,
        uniqCode: state.uniqCode,
        totalBill: state.totalBill,
        setIsCreateAccount: (value) => dispatch({ type: ACTION_TYPE.SET_IS_CREATE_ACCOUNT, value }),
        setFullName: (value) => dispatch({ type: ACTION_TYPE.SET_FULL_NAME, value }),
        setEmail: (value) => dispatch({ type: ACTION_TYPE.SET_EMAIL, value }),
        setPassword: (value) => dispatch({ type: ACTION_TYPE.SET_PASSWORD, value }),
        setReferenceCode: (value) => dispatch({ type: ACTION_TYPE.SET_REFERENCE_CODE, value }),
        setReferenceDiscount: (value) => dispatch({ type: ACTION_TYPE.SET_REFERENCE_DISCOUNT, value }),
        setPaymentMethod: (value) => dispatch({ type: ACTION_TYPE.SET_PAYMENT_METHOD, value }),
        setCouponCode: (value) => dispatch({ type: ACTION_TYPE.SET_COUPON_CODE, value }),
        setCouponDiscount: (value) => dispatch({ type: ACTION_TYPE.SET_COUPON_DISCOUNT, value }),
        setUniqCode: (value) => dispatch({ type: ACTION_TYPE.SET_UNIQ_CODE, value }),
        setTotalBill: (value) => dispatch({ type: ACTION_TYPE.SET_TOTAL_BILL, value }),
        setInitialState: () => dispatch({ type: ACTION_TYPE.SET_INITIAL_STATE }),
    };

    return (
        <CheckoutContext.Provider value={checkoutValues}>
            {children}
        </CheckoutContext.Provider>
    );
}

CheckoutProvider.propTypes = {
    children: PropTypes.node,
};

CheckoutProvider.defaultProps = {
    children: null,
};

export default CheckoutContext;
