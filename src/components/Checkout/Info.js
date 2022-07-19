import { useContext } from 'react';
import PropTypes from 'prop-types';
import { IoWallet } from 'react-icons/io5';

import CheckoutContext from '../../context/checkoutContext';
import Card from './Card';
import Input from '../UI/form/Input';
import ProductPreview from './ProductPreview';
import PriceList from './PriceList';
import Button from '../UI/Button';

export default function Info({ onBuy, productData }) {
    const checkoutContext = useContext(CheckoutContext);

    const changeCouponeCodeHandler = (event) => {
        const { value } = event.target;
        checkoutContext.setCouponCode(value.toUpperCase());
    };

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
                value={checkoutContext.couponCode}
                onChange={changeCouponeCodeHandler}
                buttonDisabled={checkoutContext.couponCode.trim() === ''}
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
                full
            />
        </Card>
    );
}

Info.propTypes = {
    onBuy: PropTypes.func,
    productData: PropTypes.shape({
        previewHome: PropTypes.string,
        name: PropTypes.string,
        newPrice: PropTypes.string,
    }),
};

Info.defaultProps = {
    onBuy: () => {},
    productData: {
        previewHome: '',
        name: '',
        newPrice: '',
    },
};
