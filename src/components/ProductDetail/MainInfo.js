import Link from 'next/link';
import PropTypes from 'prop-types';
import { IoPlay, IoWallet } from 'react-icons/io5';

import CardInfo from './CardInfo';
import PriceComp from '../Products/PriceComp';
import Button from '../UI/Button';

export default function MainInfo({
    data: {
        demo,
        realPrice,
        discount,
        newPrice,
    },
}) {
    return (
        <CardInfo>
            <h1 className="text-3xl text-slate-700 font-bold mb-5">Buntoapp</h1>
            <PriceComp realPrice={realPrice} discount={discount} newPrice={newPrice} />
            <div className="mt-7 w-full ">
                <Link href={demo}>
                    <a>
                        <Button title="Lihat Demo" size="md-lg" variant="outline-primary" icon={<IoPlay />} full />
                    </a>
                </Link>
                <Button title="Beli Sekarang" size="md-lg" className="mt-4" icon={<IoWallet />} full />
            </div>
        </CardInfo>
    );
}

MainInfo.propTypes = {
    data: PropTypes.shape({
        demo: PropTypes.string,
        realPrice: PropTypes.string,
        discount: PropTypes.string,
        newPrice: PropTypes.string,
    }),
};

MainInfo.defaultProps = {
    data: {
        demo: '0',
        realPrice: '0',
        discount: '0%',
        newPrice: '0',
    },
};
