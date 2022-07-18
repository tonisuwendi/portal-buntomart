import PropTypes from 'prop-types';

import Form from './Form';
import Info from './Info';

export default function Checkout({ productData }) {
    return (
        <section className="flex justify-between w-1100 mx-auto mt-5">
            <div className="w-[650px]">
                <Form />
            </div>
            <div className="w-[420px]">
                <Info productData={productData} />
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
