import PropTypes from 'prop-types';

import BuyerData from './BuyerData';
import PaymentMethod from './PaymentMethod';

export default function Form({ productData }) {
    return (
        <>
            <BuyerData productData={productData} />
            <PaymentMethod />
        </>
    );
}

Form.propTypes = {
    productData: PropTypes.shape({}),
};

Form.defaultProps = {
    productData: {},
};
