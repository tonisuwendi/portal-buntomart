import PropTypes from 'prop-types';
import { FiCheckCircle } from 'react-icons/fi';

export default function PaymentMethodItem({
    id, name, logo, info, selected, disabled, onSelectPayment,
}) {
    const selectPaymentHandler = () => {
        if (disabled) return;
        onSelectPayment(id);
    };

    return (
        <div
            className={`flex items-center justify-between border h-[60px] px-5 rounded cursor-pointer transition ${disabled ? 'opacity-50 bg-slate-100 cursor-not-allowed' : 'hover:bg-slate-50'} ${selected ? 'buntomart-border-color-primary bg-teal-50 hover:bg-teal-50' : 'border-slate-300'}`}
            onClick={selectPaymentHandler}
            onKeyDown={selectPaymentHandler}
            role="button"
            tabIndex={0}
        >
            <div className="flex items-center">
                <img src={logo} alt={`logo ${name}`} className="w-[60px] mr-5" />
                <div className="flex flex-col gap-0">
                    <p className="font-medium text-[15px] text-slate-600">{name}</p>
                    {info && <small className={`text-[12px] ${disabled ? 'text-slate-600' : 'text-slate-500'}`}>{info}</small>}
                </div>
            </div>
            {selected && <FiCheckCircle className="text-xl text-teal-700" />}
        </div>
    );
}

PaymentMethodItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    logo: PropTypes.string,
    info: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    onSelectPayment: PropTypes.func,
};

PaymentMethodItem.defaultProps = {
    id: '',
    name: '',
    logo: '',
    info: '',
    selected: false,
    disabled: false,
    onSelectPayment: () => {},
};
