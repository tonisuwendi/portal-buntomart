import { useState } from 'react';

import Toggle from '../../UI/form/Toggle';
import Card from '../Card';
import CreateAccount from './CreateAccount';

export default function BuyerData() {
    const [isCreateAccount, setIsCreateAccount] = useState(true);

    const changeTypeBuyerHandler = () => setIsCreateAccount((prevState) => !prevState);

    return (
        <Card>
            <h3 className="text-xl text-slate-700 font-medium mb-4">Data Pembeli</h3>
            <hr />
            <div className="mt-6">
                <Toggle
                    id="buyerDataCheckbox"
                    label="Gunakan akun yang sudah ada"
                    checked={!isCreateAccount}
                    onChange={changeTypeBuyerHandler}
                />
                <div className="mt-4">
                    {
                        isCreateAccount ? (
                            <CreateAccount />
                        ) : (
                            null
                        )
                    }
                </div>
            </div>
        </Card>
    );
}
