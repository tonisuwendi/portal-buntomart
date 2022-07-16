import PropTypes from 'prop-types';

import CardInfo from './CardInfo';

export default function ProductInfo({ data: { informations } }) {
    return (
        <CardInfo>
            <h3 className="text-xl text-slate-600 font-bold">Informasi Produk</h3>
            <div className="mt-5 w-full">
                {
                    informations.map((information) => (
                        <div key={information.id} className="flex justify-between w-full border-b py-3">
                            <span className="text-slate-700 text-sm">{information.key}</span>
                            <span className="text-slate-700 text-sm">{information.value}</span>
                        </div>
                    ))
                }
            </div>
        </CardInfo>
    );
}

ProductInfo.propTypes = {
    data: PropTypes.shape({
        informations: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string,
            value: PropTypes.string,
        })),
    }),
};

ProductInfo.defaultProps = {
    data: {
        informations: [{
            key: '',
            value: '',
        }],
    },
};
