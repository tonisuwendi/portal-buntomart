import PropTypes from 'prop-types';
import { ImSpinner2 } from 'react-icons/im';

export default function Input({
    id,
    label,
    placeholder,
    type,
    value,
    withButton,
    buttonText,
    buttonDisabled,
    buttonLoading,
    buttonClicked,
    required,
    optionalText,
    inputError,
    inputSuccess,
    textHelper,
    onChange,
}) {
    const inputElement = (
        <input
            type={type}
            id={id}
            className={`bg-slate-50 border border-slate-300 ${inputSuccess ? 'border-green-500' : ''} ${inputError ? 'border-red-400' : ''} text-slate-900 text-sm buntomart-rounded focus:border-teal-500 focus:outline-teal-500 focus:outline-2 transition block w-full p-2.5`}
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
                    onClick={buttonClicked}
                    className={`flex items-center justify-center transition disabled:cursor-not-allowed text-white absolute right-[3px] bottom-[3px] buntomart-bg-color-primary text-white${buttonDisabled ? '' : ' buntomart-bg-color-primary-hover'} ${buttonLoading ? '' : 'disabled:opacity-50'} font-medium rounded text-sm px-5 py-2`}
                >
                    {buttonLoading && <ImSpinner2 className="absolute text-lg animate-spin" />}
                    <span className={buttonLoading ? 'invisible' : 'visible'}>{buttonText}</span>
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
            {inputSuccess && <small className="text-xs block mt-1 text-green-600">{inputSuccess}</small>}
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
    inputSuccess: PropTypes.string,
    buttonText: PropTypes.string,
    optionalText: PropTypes.string,
    withButton: PropTypes.bool,
    buttonDisabled: PropTypes.bool,
    buttonLoading: PropTypes.bool,
    buttonClicked: PropTypes.func,
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
    inputSuccess: '',
    buttonText: '',
    optionalText: '',
    withButton: false,
    buttonDisabled: false,
    buttonLoading: false,
    buttonClicked: () => {},
    required: false,
    onChange: () => {},
};
