/* eslint-disable react/jsx-no-constructed-context-values */

import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { ACTION_TYPE, INITIAL_STATE } from './checkoutUtils';

const CheckoutContext = createContext(INITIAL_STATE);

const checkoutReducer = (state, action) => {
    switch (action.type) {
    case ACTION_TYPE.SET_IS_CREATE_ACCOUNT:
        return { ...state, isCreateAccount: action.value };
    case ACTION_TYPE.SET_FULL_NAME:
        return { ...state, fullName: action.value };
    case ACTION_TYPE.SET_EMAIL:
        return { ...state, email: action.value };
    case ACTION_TYPE.SET_PASSWORD:
        return { ...state, password: action.value };
    case ACTION_TYPE.SET_REFERENCE_CODE:
        return { ...state, referenceCode: action.value };
    case ACTION_TYPE.SET_PAYMENT_METHOD:
        return { ...state, paymentMethod: action.value };
    case ACTION_TYPE.SET_COUPON_CODE:
        return { ...state, couponCode: action.value };
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
        paymentMethod: state.paymentMethod,
        couponCode: state.couponCode,
        setIsCreateAccount: (value) => dispatch({ type: ACTION_TYPE.SET_IS_CREATE_ACCOUNT, value }),
        setFullName: (value) => dispatch({ type: ACTION_TYPE.SET_FULL_NAME, value }),
        setEmail: (value) => dispatch({ type: ACTION_TYPE.SET_EMAIL, value }),
        setPassword: (value) => dispatch({ type: ACTION_TYPE.SET_PASSWORD, value }),
        setReferenceCode: (value) => dispatch({ type: ACTION_TYPE.SET_REFERENCE_CODE, value }),
        setPaymentMethod: (value) => dispatch({ type: ACTION_TYPE.SET_PAYMENT_METHOD, value }),
        setCouponCode: (value) => dispatch({ type: ACTION_TYPE.SET_COUPON_CODE, value }),
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
