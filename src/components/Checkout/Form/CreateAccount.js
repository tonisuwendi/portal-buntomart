import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { MdInfo } from 'react-icons/md';

import CheckoutContext from '../../../context/checkoutContext';
import Input from '../../UI/form/Input';
import InputPassword from '../../UI/form/InputPassword';
import { checkReferenceCode } from '../../../api/endpoints';
import { calculateDiscount, catchError } from '../../../utils/helpers';

export default function CreateAccount({ productData: { newPrice } }) {
    const [referenceLoading, setReferenceLoading] = useState(false);
    const [responseReference, setResponseReference] = useState(null);

    const checkoutContext = useContext(CheckoutContext);

    const changeNameHandler = (event) => {
        const { value } = event.target;
        checkoutContext.setFullName(value);
    };

    const changeEmailHandler = (event) => {
        const { value } = event.target;
        checkoutContext.setEmail(value);
    };

    const changePasswordHandler = (event) => {
        const { value } = event.target;
        checkoutContext.setPassword(value);
    };

    const changeReferenceHandler = (event) => {
        const { value } = event.target;
        checkoutContext.setReferenceCode(value.toUpperCase());
        setResponseReference(null);
    };

    const checkReferenceCodeHandler = async () => {
        setReferenceLoading(true);

        const payload = { code: checkoutContext.referenceCode };
        try {
            const res = await checkReferenceCode(payload);
            if (!res.success) throw new Error(res.message);
            const referenceDiscount = calculateDiscount(newPrice, res.discount);
            checkoutContext.setReferenceDiscount(referenceDiscount);
            setResponseReference({
                type: 'SUCCESS',
                message: res.message,
            });
        } catch (error) {
            checkoutContext.setReferenceDiscount(0);
            setResponseReference({
                type: 'ERROR',
                message: catchError(error),
            });
        } finally {
            setReferenceLoading(false);
        }
    };

    return (
        <form>
            <Input
                id="name"
                label="Nama Lengkap"
                textHelper="Maksimal 50 karakter"
                value={checkoutContext.fullName}
                onChange={changeNameHandler}
                required
            />
            <Input
                id="email"
                label="Email"
                value={checkoutContext.email}
                onChange={changeEmailHandler}
                textHelper="Wajib Gmail (xxx@gmail.com)"
                required
            />
            <InputPassword
                id="password"
                label="Password"
                value={checkoutContext.password}
                onChange={changePasswordHandler}
                required
            />
            <Input
                id="reference"
                label="Kode Referensi"
                buttonText="Cek Kode"
                value={checkoutContext.referenceCode}
                onChange={changeReferenceHandler}
                buttonDisabled={checkoutContext.referenceCode.trim() === '' || referenceLoading}
                optionalText="(Jika ada)"
                buttonLoading={referenceLoading}
                buttonClicked={checkReferenceCodeHandler}
                inputError={responseReference?.type === 'ERROR' ? responseReference.message : ''}
                inputSuccess={responseReference?.type === 'SUCCESS' ? responseReference.message : ''}
                withButton
            />
            <div className="p-4 text-sm bg-gray-100 rounded-lg dark:bg-gray-700 mt-5" role="alert">
                <span className="font-medium flex items-center text-slate-700 mb-1">
                    <MdInfo className="mr-1" />
                    Email dan password digunakan untuk login dashboard.
                    <br />
                </span>
                <span className="text-slate-500">
                    Dashboard Buntomart adalah sebuah tempat untuk memudahkan member ketika ingin
                    meminta bantuan, melaporkan suatu hal, dan lain-lain.
                </span>
            </div>
        </form>
    );
}

CreateAccount.propTypes = {
    productData: PropTypes.shape({
        newPrice: PropTypes.string,
    }),
};

CreateAccount.defaultProps = {
    productData: {
        newPrice: '',
    },
};
