import PropTypes from 'prop-types';
import { IoPlay, IoWallet } from 'react-icons/io5';

import PriceComp from '../Products/PriceComp';
import Button from '../UI/Button';

export default function Info({
    data: {
        realPrice,
        discount,
        newPrice,
    },
}) {
    return (
        <div className="bg-white px-6 py-7 flex flex-col items-center w-[330px] h-full items-start overflow-scroll drop-shadow rounded-lg">
            <h1 className="text-3xl text-slate-600 font-bold mb-5">Buntoapp</h1>
            <PriceComp realPrice={realPrice} discount={discount} newPrice={newPrice} />
            <div className="mt-7 w-full ">
                <Button title="Lihat Demo" size="md-lg" variant="outline-primary" icon={<IoPlay />} full />
                <Button title="Beli Sekarang" size="md-lg" className="mt-4" icon={<IoWallet />} full />
            </div>
        </div>
    );
}

Info.propTypes = {
    data: PropTypes.shape({
        realPrice: PropTypes.string,
        discount: PropTypes.string,
        newPrice: PropTypes.string,
    }),
};

Info.defaultProps = {
    data: {
        realPrice: '0',
        discount: '0%',
        newPrice: '0',
    },
};
