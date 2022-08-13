import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import CheckoutContext from '../../context/checkoutContext';
import Form from './Form';
import Info from './Info';
import Modal from '../UI/Modal';
import { catchError } from '../../utils/helpers';
import { insertCheckout } from '../../api/endpoints';

export default function Checkout({ productData }) {
    const [isLoading, setIsLoading] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const {
        fullName,
        email,
        password,
        referenceCode,
        paymentMethod,
        couponCode,
        uniqCode,
        totalBill,
        setInitialState,
    } = useContext(CheckoutContext);

    useEffect(() => () => setInitialState(), []);

    const handleBuy = async () => {
        setIsLoading('BUY_LOADING');

        const payload = {
            product_id: productData.id,
            full_name: fullName,
            email,
            password,
            reference_code: referenceCode,
            payment_method: paymentMethod,
            coupon_code: couponCode,
            uniq_code: uniqCode,
            total_bill: totalBill,
        };

        try {
            const res = await insertCheckout(payload);
            if (!res.success) throw new Error(JSON.stringify(res));
        } catch (error) {
            const errorData = JSON.parse(error.message);
            const errorMsg = catchError(errorData.message);
            if (errorData.info_type === 'toast') {
                toast.error(errorMsg);
            } else if (errorData.info_type === 'modal') {
                setErrorMessage(errorMsg);
            } else {
                toast.error(errorMsg);
            }
        } finally {
            setIsLoading('');
        }
    };

    const reloadBrowserHandler = () => {
        setIsLoading('RELOAD_LOADING');
        window.location.reload(true);
    };

    return (
        <>
            <section className="flex justify-between w-1100 mx-auto mt-5">
                <div className="w-[650px]">
                    <Form productData={productData} />
                </div>
                <div className="w-[420px]">
                    <Info onBuy={handleBuy} buttonLoading={isLoading === 'BUY_LOADING'} productData={productData} />
                </div>
            </section>
            <Modal
                title="Terjadi Kesalahan"
                show={!!errorMessage}
                confirmTextButton="Refresh"
                cancelTextButton="Tutup"
                confirmActionButton={reloadBrowserHandler}
                isLoading={isLoading === 'RELOAD_LOADING'}
                onClose={() => setErrorMessage(null)}
            >
                {errorMessage}
            </Modal>
        </>
    );
}

Checkout.propTypes = {
    productData: PropTypes.shape({
        id: PropTypes.string,
    }),
};

Checkout.defaultProps = {
    productData: {
        id: '',
    },
};
