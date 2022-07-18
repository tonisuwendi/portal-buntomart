import { useState } from 'react';
import { MdInfo } from 'react-icons/md';

import Input from '../../UI/form/Input';
import InputPassword from '../../UI/form/InputPassword';

export default function CreateAccount() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reference, setReference] = useState('');

    const changeNameHandler = (event) => {
        const { value } = event.target;
        setFullName(value);
    };

    const changeEmailHandler = (event) => {
        const { value } = event.target;
        setEmail(value);
    };

    const changePasswordHandler = (event) => {
        const { value } = event.target;
        setPassword(value);
    };

    const changeReferenceHandler = (event) => {
        const { value } = event.target;
        setReference(value.toUpperCase());
    };

    return (
        <form>
            <Input
                id="name"
                label="Nama Lengkap"
                textHelper="Maksimal 50 karakter"
                value={fullName}
                onChange={changeNameHandler}
                required
            />
            <Input
                id="email"
                label="Email"
                value={email}
                onChange={changeEmailHandler}
                textHelper="Wajib Gmail (xxx@gmail.com)"
                required
            />
            <InputPassword
                id="password"
                label="Password"
                value={password}
                onChange={changePasswordHandler}
                required
            />
            <Input
                id="reference"
                label="Kode Referensi"
                buttonText="Cek Kode"
                value={reference}
                onChange={changeReferenceHandler}
                buttonDisabled={reference.trim() === ''}
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
