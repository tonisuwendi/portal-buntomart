import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { IoWallet } from 'react-icons/io5';

import CheckoutContext from '../../context/checkoutContext';
import Card from './Card';
import Input from '../UI/form/Input';
import ProductPreview from './ProductPreview';
import PriceList from './PriceList';
import Button from '../UI/Button';
import { checkCouponCode } from '../../api/endpoints';
import { calculateDiscount, catchError } from '../../utils/helpers';

export default function Info({ onBuy, buttonLoading, productData }) {
    const [couponLoading, setCouponLoading] = useState(false);
    const [responseCoupon, setResponseCoupon] = useState(null);

    const {
        fullName,
        email,
        password,
        paymentMethod,
        couponCode,
        setCouponCode,
        setCouponDiscount,
    } = useContext(CheckoutContext);

    const changeCouponeCodeHandler = (event) => {
        const { value } = event.target;
        setCouponCode(value.toUpperCase());
        setResponseCoupon(null);
    };

    const checkCouponCodeHandler = async () => {
        setCouponLoading(true);

        const payload = { code: couponCode };
        try {
            const res = await checkCouponCode(payload);
            if (!res.success) throw new Error(res.message);
            const couponDiscount = calculateDiscount(productData.newPrice, res.discount);
            setCouponDiscount(couponDiscount);
            setResponseCoupon({
                type: 'SUCCESS',
                message: res.message,
            });
        } catch (error) {
            setCouponDiscount(0);
            setResponseCoupon({
                type: 'ERROR',
                message: catchError(error),
            });
        } finally {
            setCouponLoading(false);
        }
    };

    const buttonDisabled = !fullName || fullName.length > 50 || !email || !password || !paymentMethod;

    return (
        <Card>
            <h3 className="text-xl text-slate-700 font-medium mb-4">Ringkasan Pesanan</h3>
            <hr className="mb-6" />
            <ProductPreview
                image={productData.previewHome}
                name={productData.name}
                newPrice={productData.newPrice}
            />
            <Input
                id="coupon"
                label="Kode Kupon"
                buttonText="Terapkan"
                value={couponCode}
                onChange={changeCouponeCodeHandler}
                buttonDisabled={couponCode.trim() === '' || couponLoading}
                buttonClicked={checkCouponCodeHandler}
                buttonLoading={couponLoading}
                inputError={responseCoupon?.type === 'ERROR' ? responseCoupon.message : ''}
                inputSuccess={responseCoupon?.type === 'SUCCESS' ? responseCoupon.message : ''}
                withButton
            />
            <hr className="my-5" />
            <PriceList newPrice={productData.newPrice} />
            <p className="mt-3 mb-5 text-sm text-slate-500 leading-5">
                Dengan mengklik tombol di bawah, kamu menyetujui
                {' '}
                <a href="" className="text-blue-500">Syarat &amp; Ketentuan</a>
                {' '}
                Buntomart.
            </p>
            <Button
                title="Bayar Sekarang"
                size="lg"
                icon={<IoWallet />}
                onClick={onBuy}
                disabled={buttonDisabled || buttonLoading}
                loading={buttonLoading}
                full
            />
        </Card>
    );
}

Info.propTypes = {
    onBuy: PropTypes.func,
    buttonLoading: PropTypes.bool,
    productData: PropTypes.shape({
        previewHome: PropTypes.string,
        name: PropTypes.string,
        newPrice: PropTypes.string,
    }),
};

Info.defaultProps = {
    onBuy: () => {},
    buttonLoading: false,
    productData: {
        previewHome: '',
        name: '',
        newPrice: '',
    },
};
