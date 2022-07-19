import { useContext } from 'react';

import CheckoutContext from '../../../context/checkoutContext';
import Toggle from '../../UI/form/Toggle';
import Card from '../Card';
import CreateAccount from './CreateAccount';

export default function BuyerData() {
    const checkoutContext = useContext(CheckoutContext);

    return (
        <Card>
            <h3 className="text-xl text-slate-700 font-medium mb-4">Data Pembeli</h3>
            <hr />
            <div className="mt-6">
                <Toggle
                    id="buyerDataCheckbox"
                    label="Gunakan akun yang sudah ada"
                    checked={!checkoutContext.isCreateAccount}
                    onChange={() => checkoutContext.setIsCreateAccount(!checkoutContext.isCreateAccount)}
                />
                <div className="mt-4">
                    {
                        checkoutContext.isCreateAccount ? (
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
