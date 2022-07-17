import PropTypes from 'prop-types';

export default function CardInfo({ children, alignItems }) {
    return (
        <div className={`bg-white px-6 py-7 mb-5 flex flex-col ${alignItems} drop-shadow rounded-lg`}>
            {children}
        </div>
    );
}

CardInfo.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    alignItems: PropTypes.string,
};

CardInfo.defaultProps = {
    children: [],
    alignItems: 'items-center',
};
