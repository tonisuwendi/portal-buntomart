import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import PriceListItem from './PriceListItem';

const stringRpToNumber = (price) => Number(price.replace(/\./g, ''));
export default function PriceList({ newPrice, discountReference, discountCoupon }) {
    const [uniqCode, setUniqCode] = useState(0);

    useEffect(() => {
        const newValue = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        setUniqCode(newValue);
    }, []);

    const totalBill = stringRpToNumber(newPrice) + discountCoupon + discountCoupon + uniqCode;

    const formattedFormatBill = new Intl.NumberFormat('id-ID').format(totalBill);

    return (
        <>
            <PriceListItem title="Harga Produk" price={newPrice} />
            <PriceListItem title="Diskon Referensi" price={String(discountReference)} />
            <PriceListItem title="Diskon Kupon" price={String(discountCoupon)} />
            <PriceListItem title="Biaya Layanan" />
            <PriceListItem title="Kode Unik" price={String(uniqCode)} />
            <hr className="my-3" />
            <PriceListItem title="Total Tagihan" price={formattedFormatBill} isTotal />
        </>
    );
}

PriceList.propTypes = {
    newPrice: PropTypes.string.isRequired,
    discountReference: PropTypes.number,
    discountCoupon: PropTypes.number,
};

PriceList.defaultProps = {
    discountReference: 0,
    discountCoupon: 0,
};
