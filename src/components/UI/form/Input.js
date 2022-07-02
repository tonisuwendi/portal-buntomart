export default function Input({ id, label, placeholder, type = "text", value, required, textHelper, onChange }) {
    return (
      <div className="mb-4">
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-slate-700"
        >
          {label}{required && <span className="text-red-500"> *</span>}
        </label>
        <input
          type={type}
          id={id}
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm buntomart-rounded focus:border-teal-500 focus:outline-teal-500 focus:outline-2 transition block w-full p-2.5"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required
        />
        <small className="text-xs text-slate-500">{textHelper}</small>
      </div>
    );
}
