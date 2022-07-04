import PropTypes from 'prop-types';

import DottedBg from '../UI/DottedBg';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

export default function ProductItem({ data, imageLeft = false }) {
    return (
        <div className="flex mt-16 relative items-center justify-center gap-x-10 mb-24">
            {imageLeft ? (
                <>
                    <DottedBg color bottom="0" left="0" />
                    <ProductImage image={data.image} name={data.name} />
                    <ProductInfo data={data} imageLeft={imageLeft} />
                </>
            ) : (
                <>
                    <DottedBg color top="0" right="0" />
                    <ProductInfo data={data} imageLeft={imageLeft} />
                    <ProductImage image={data.image} name={data.name} />
                </>
            )}
        </div>
    );
}

ProductItem.propTypes = {
    imageLeft: PropTypes.bool,
    data: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
    }),
};

ProductItem.defaultProps = {
    imageLeft: false,
    data: {
        name: '',
        image: '',
    },
};
