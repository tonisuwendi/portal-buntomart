import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';

import PriceListItem from './PriceListItem';
import CheckoutContext from '../../context/checkoutContext';
import { formattedPrice, stringRpToNumber } from '../../utils/helpers';

export default function PriceList({ newPrice }) {
    const {
        referenceDiscount, couponDiscount, uniqCode, totalBill, setUniqCode, setTotalBill,
    } = useContext(CheckoutContext);

    useEffect(() => {
        const newUniqCode = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        setUniqCode(newUniqCode);
        const newTotalBill = stringRpToNumber(newPrice) - referenceDiscount - couponDiscount + newUniqCode;
        setTotalBill(newTotalBill);
    }, [referenceDiscount, couponDiscount]);

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
