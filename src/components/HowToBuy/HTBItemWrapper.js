import PropTypes from 'prop-types';

export default function HTBItemWrapper({
    children, step, data, onChangeStep,
}) {
    return (
        <div
            onClick={() => onChangeStep(data)}
            onKeyDown={() => onChangeStep(data)}
            tabIndex={0}
            role="button"
            className={`flex relative px-6 py-5 border ${step.id === data.id ? 'buntomart-border-color-primary' : ''} transition buntomart-rounded cursor-pointer mb-8`}
        >
            {children}
        </div>
    );
}

HTBItemWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    onChangeStep: PropTypes.func,
    step: PropTypes.shape({
        id: PropTypes.string,
    }),
    data: PropTypes.shape({
        id: PropTypes.string,
    }),
};

HTBItemWrapper.defaultProps = {
    children: [],
    onChangeStep: () => {},
    step: {
        id: '',
    },
    data: {
        id: '',
    },
};
