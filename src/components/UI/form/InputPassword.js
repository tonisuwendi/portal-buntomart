import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function InputPassword({
    id, label, placeholder, value, required, optionalText, inputError, textHelper, onChange,
}) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

    return (
        <div className="mb-4 relative">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-slate-700"
            >
                {label}
                {required ? (
                    <span className="text-red-500"> *</span>
                ) : (
                    optionalText && <span className="text-slate-400 text-sm font-normal"> (opsional)</span>
                )}
            </label>
            <input
                type={showPassword ? 'text' : 'password'}
                id={id}
                className={`bg-slate-50 border ${inputError ? 'border-red-400' : 'border-slate-300'} text-slate-900 text-sm buntomart-rounded focus:border-teal-500 focus:outline-teal-500 focus:outline-2 transition block w-full p-2.5`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required
            />
            <button
                type="button"
                className="absolute bottom-2 right-5 text-2xl text-slate-500"
                onClick={toggleShowPassword}
            >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            {inputError && <small className="text-xs block mt-1 text-red-500">{inputError}</small>}
            <small className="text-xs block mt-1 text-slate-500">{textHelper}</small>
        </div>
    );
}

InputPassword.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    textHelper: PropTypes.string,
    inputError: PropTypes.string,
    required: PropTypes.bool,
    optionalText: PropTypes.bool,
    onChange: PropTypes.func,
};

InputPassword.defaultProps = {
    id: '',
    label: '',
    placeholder: '',
    value: '',
    textHelper: '',
    inputError: '',
    required: false,
    optionalText: false,
    onChange: () => {},
};
