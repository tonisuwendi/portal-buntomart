import { useState } from 'react';

import PaymentMethodItem from './PaymentMethodItem';
import paymentMethod from '../../../data/dummy/paymentMethod';
import Card from '../Card';

export default function PaymentMethod() {
    const [paymentSelected, setPaymentSelected] = useState('');

    const selectPaymentHandler = (id) => {
        setPaymentSelected(id);
    };

    return (
        <Card>
            <h3 className="text-xl text-slate-700 font-medium mb-4">Metode Pembayaran</h3>
            <hr />
            {
                paymentMethod.map((paymentData) => (
                    <div key={paymentData.id} className="mt-6">
                        <p className="text-slate-600">{paymentData.title}</p>
                        <div className="mt-3 flex gap-3 flex-col">
                            {
                                paymentData.data.map((data) => (
                                    <PaymentMethodItem
                                        key={data.id}
                                        id={data.id}
                                        name={data.name}
                                        logo={data.logo}
                                        info={data.info}
                                        selected={data.id === paymentSelected}
                                        disabled={data.disabled}
                                        onSelectPayment={selectPaymentHandler}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </Card>
    );
}
