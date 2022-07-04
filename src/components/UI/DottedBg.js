import PropTypes from 'prop-types';

export default function DottedBg({
    top, right, bottom, left, color,
}) {
    return (
        <img
            src={`/images/dotted-bg${color ? '-green' : ''}.svg`}
            alt="dotted bg"
            className="absolute w-48"
            style={{
                zIndex: '-1', top, right, bottom, left,
            }}
        />
    );
}

DottedBg.propTypes = {
    top: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    color: PropTypes.bool,
};

DottedBg.defaultProps = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
    color: false,
};
