import PropTypes from 'prop-types';

import PriceListItem from './PriceListItem';

export default function PriceList({ newPrice }) {
    const uniqCode = Math.floor(Math.random() * (999 - 100 + 1) + 100);

    return (
        <>
            <PriceListItem title="Harga Produk" price={newPrice} />
            <PriceListItem title="Diskon Referensi" price="50.000" />
            <PriceListItem title="Diskon Kupon" price="10.000" />
            <PriceListItem title="Biaya Layanan" />
            <PriceListItem title="Kode Unik" price={String(uniqCode)} />
            <hr className="my-3" />
            <PriceListItem title="Total Tagihan" price="830.382" isTotal />
        </>
    );
}

PriceList.propTypes = {
    newPrice: PropTypes.string.isRequired,
};
