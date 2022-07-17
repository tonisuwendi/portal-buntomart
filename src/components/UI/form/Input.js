import PropTypes from 'prop-types';

export default function Input({
    id,
    label,
    placeholder,
    type,
    value,
    withButton,
    buttonText,
    buttonDisabled,
    required,
    optionalText,
    inputError,
    textHelper,
    onChange,
}) {
    const inputElement = (
        <input
            type={type}
            id={id}
            className={`bg-slate-50 border ${inputError ? 'border-red-400' : 'border-slate-300'} text-slate-900 text-sm buntomart-rounded focus:border-teal-500 focus:outline-teal-500 focus:outline-2 transition block w-full p-2.5`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required
        />
    );

    let inputContainer = inputElement;
    if (withButton) {
        inputContainer = (
            <div className="relative">
                {inputElement}
                <button
                    type="button"
                    disabled={buttonDisabled}
                    className={`transition disabled:opacity-50 disabled:cursor-not-allowed text-white absolute right-[3px] bottom-[3px] buntomart-bg-color-primary text-white${buttonDisabled ? '' : ' buntomart-bg-color-primary-hover'} font-medium rounded text-sm px-5 py-2`}
                >
                    {buttonText}
                </button>
            </div>
        );
    }

    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-slate-700"
            >
                {label}
                {required ? (
                    <span className="text-red-500"> *</span>
                ) : (
                    optionalText && (
                        <span className="text-slate-400 text-sm font-normal">
                            {' '}
                            {optionalText}
                        </span>
                    )
                )}
            </label>
            {inputContainer}
            {inputError && <small className="text-xs block mt-1 text-red-500">{inputError}</small>}
            <small className="text-xs block mt-1 text-slate-500">{textHelper}</small>
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    textHelper: PropTypes.string,
    inputError: PropTypes.string,
    buttonText: PropTypes.string,
    optionalText: PropTypes.string,
    withButton: PropTypes.bool,
    buttonDisabled: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    id: '',
    label: '',
    placeholder: '',
    type: 'text',
    value: '',
    textHelper: '',
    inputError: '',
    buttonText: '',
    optionalText: '',
    withButton: false,
    buttonDisabled: false,
    required: false,
    onChange: () => {},
};
