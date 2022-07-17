import Card from '../Card';
import BuyerData from './BuyerData';

export default function Form() {
    return (
        <>
            <BuyerData />
            <Card>
                <h3 className="text-xl text-slate-700">Data Pembeli</h3>
            </Card>
        </>
    );
}
