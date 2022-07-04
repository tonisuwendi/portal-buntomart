import PropTypes from 'prop-types';

export default function Textarea({
    id, label, placeholder, value, required, onChange,
}) {
    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-slate-700"
            >
                {label}
                {required && <span className="text-red-500"> *</span>}
            </label>
            <textarea
                id={id}
                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm buntomart-rounded focus:border-teal-500 focus:outline-teal-500 focus:outline-2 transition block w-full p-2.5"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                defaultChecked={value}
                required
            />
        </div>
    );
}

Textarea.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
};

Textarea.defaultProps = {
    id: '',
    label: '',
    placeholder: '',
    value: '',
    required: false,
    onChange: () => {},
};
