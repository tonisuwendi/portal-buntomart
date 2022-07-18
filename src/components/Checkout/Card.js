import PropTypes from 'prop-types';

export default function Card({ children, className }) {
    return (
        <div className={`bg-white drop-shadow rounded-lg px-6 py-7 mb-5 ${className}`}>{children}</div>
    );
}

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

Card.defaultProps = {
    children: null,
    className: '',
};
