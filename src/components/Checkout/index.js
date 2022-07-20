import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import CheckoutContext from '../../context/checkoutContext';
import Form from './Form';
import Info from './Info';

export default function Checkout({ productData }) {
    const checkoutContext = useContext(CheckoutContext);

    useEffect(() => () => checkoutContext.setInitialState(), []);

    const handleBuy = () => {
        console.log(checkoutContext);
    };

    return (
        <section className="flex justify-between w-1100 mx-auto mt-5">
            <div className="w-[650px]">
                <Form productData={productData} />
            </div>
            <div className="w-[420px]">
                <Info onBuy={handleBuy} productData={productData} />
            </div>
        </section>
    );
}

Checkout.propTypes = {
    productData: PropTypes.shape({}),
};

Checkout.defaultProps = {
    productData: {},
};
