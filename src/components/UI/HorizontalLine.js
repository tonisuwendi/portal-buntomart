import PropTypes from 'prop-types';

export default function HorizontalLine({ center, width, my }) {
    return (
        <div
            className={`${width} h-1 rounded-full buntomart-bg-color-primary ${center ? 'mx-auto' : ''} ${my}`}
        />
    );
}

HorizontalLine.propTypes = {
    width: PropTypes.string,
    my: PropTypes.string,
    center: PropTypes.bool,
};

HorizontalLine.defaultProps = {
    width: 'w-24',
    my: 'my-4',
    center: false,
};
