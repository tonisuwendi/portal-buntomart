import PropTypes from 'prop-types';

export default function ProductImage({ image, name }) {
    return (
        <div className="flex-1">
            <img src={image} alt={`thumbnail ${name}`} />
        </div>
    );
}

ProductImage.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
};

ProductImage.defaultProps = {
    image: '',
    name: '',
};
