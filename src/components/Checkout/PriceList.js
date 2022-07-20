import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';

import PriceListItem from './PriceListItem';
import CheckoutContext from '../../context/checkoutContext';
import { formattedPrice, stringRpToNumber } from '../../utils/helpers';

export default function PriceList({ newPrice }) {
    const [uniqCode, setUniqCode] = useState(0);
    const { referenceDiscount, couponDiscount } = useContext(CheckoutContext);

    useEffect(() => {
        const newValue = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        setUniqCode(newValue);
    }, []);

    const totalBill = stringRpToNumber(newPrice) - referenceDiscount - couponDiscount + uniqCode;

    return (
        <>
            <PriceListItem title="Harga Produk" price={newPrice} />
            <PriceListItem title="Diskon Referensi" price={formattedPrice(referenceDiscount)} />
            <PriceListItem title="Diskon Kupon" price={formattedPrice(couponDiscount)} />
            <PriceListItem title="Biaya Layanan" />
            <PriceListItem title="Kode Unik" price={String(uniqCode)} />
            <hr className="my-3" />
            <PriceListItem title="Total Tagihan" price={formattedPrice(totalBill)} isTotal />
        </>
    );
}

PriceList.propTypes = {
    newPrice: PropTypes.string.isRequired,
};
