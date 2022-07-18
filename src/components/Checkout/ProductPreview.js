import PropTypes from 'prop-types';

export default function ProductPreview({ image, name, newPrice }) {
    return (
        <div className="flex items-center mb-6">
            <img className="h-16 shadow rounded" src={image} alt={`produk ${name}`} />
            <div className="flex flex-col justify-center ml-4">
                <p className="font-medium text-lg text-slate-600">{`Source Code ${name}`}</p>
                <p className="text-slate-500">{`Rp${newPrice}`}</p>
            </div>
        </div>
    );
}

ProductPreview.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    newPrice: PropTypes.string,
};

ProductPreview.defaultProps = {
    image: '',
    name: '',
    newPrice: '',
};
