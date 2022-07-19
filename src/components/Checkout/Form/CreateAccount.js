import { useContext } from 'react';
import { MdInfo } from 'react-icons/md';

import CheckoutContext from '../../../context/checkoutContext';
import Input from '../../UI/form/Input';
import InputPassword from '../../UI/form/InputPassword';

export default function CreateAccount() {
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
                buttonDisabled={checkoutContext.referenceCode.trim() === ''}
                optionalText="(Jika ada)"
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
