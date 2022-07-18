import PropTypes from 'prop-types';

export default function PriceListItem({ title, price, isTotal }) {
    return (
        <div className="flex justify-between w-full py-1.5">
            <span className={isTotal ? 'text-indigo-600 font-bold' : 'text-slate-600 text-sm'}>{title}</span>
            <span className={`font-bold ${isTotal ? 'text-indigo-600' : 'text-slate-700 text-sm'}`}>{`Rp${price}`}</span>
        </div>
    );
}

PriceListItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    isTotal: PropTypes.bool,
};

PriceListItem.defaultProps = {
    title: '',
    price: '0',
    isTotal: false,
};
