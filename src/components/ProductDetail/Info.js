import PropTypes from 'prop-types';

import MainInfo from './MainInfo';
import ProductInfo from './ProductInfo';

export default function Info({ data }) {
    return (
        <div className="w-[330px] h-full">
            <MainInfo data={data} />
            <ProductInfo data={data} />
        </div>
    );
}

Info.propTypes = {
    data: PropTypes.shape({}),
};

Info.defaultProps = {
    data: {},
};
