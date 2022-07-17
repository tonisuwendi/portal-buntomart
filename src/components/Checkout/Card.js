import PropTypes from 'prop-types';

export default function Card({ children }) {
    return (
        <div className="bg-white drop-shadow rounded-lg px-6 py-7 mb-5">{children}</div>
    );
}

Card.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};

Card.defaultProps = {
    children: [],
};
