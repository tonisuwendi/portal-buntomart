import PropTypes from 'prop-types';

export default function CardInfo({ children }) {
    return (
        <div className="bg-white px-6 py-7 mb-5 flex flex-col items-center items-start drop-shadow rounded-lg">
            {children}
        </div>
    );
}

CardInfo.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};

CardInfo.defaultProps = {
    children: [],
};
