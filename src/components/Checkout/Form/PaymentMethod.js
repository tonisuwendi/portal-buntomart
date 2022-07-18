import paymentMethod from '../../../data/dummy/paymentMethod';
import Card from '../Card';

export default function PaymentMethod() {
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
                                    <div
                                        key={data.id}
                                        className={`flex items-center border border-slate-300 h-[60px] px-5 rounded cursor-pointer transition ${data.disabled ? 'opacity-50 bg-slate-100 cursor-not-allowed' : 'hover:bg-slate-50'}`}
                                    >
                                        <img src={data.logo} alt={`logo ${data.name}`} className="w-[60px] mr-5" />
                                        <div className="flex flex-col gap-0">
                                            <p className="font-medium text-[15px] text-slate-600">{data.name}</p>
                                            {data.info && <small className={`text-[12px] ${data.disabled ? 'text-slate-600' : 'text-slate-500'}`}>{data.info}</small>}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </Card>
    );
}
