import PropTypes from 'prop-types';

export default function PriceComp({ realPrice, discount, newPrice }) {
    return (
        <>
            <div className="flex items-center gap-x-2 mb-1">
                <p className="text-xl line-through text-slate-400">{`Rp${realPrice}`}</p>
                <span className="px-1 py-1 bg-red-500 text-sm buntomart-rounded text-white font-semibold">
                    {discount}
                </span>
            </div>
            <h3 className="text-2xl font-black text-indigo-500">
                <span className="text-3xl">{`Rp${newPrice}`}</span>
            </h3>
        </>
    );
}

PriceComp.propTypes = {
    realPrice: PropTypes.string,
    discount: PropTypes.string,
    newPrice: PropTypes.string,
};

PriceComp.defaultProps = {
    realPrice: '',
    discount: '',
    newPrice: '',
};
