import Checkout from '../../src/components/Checkout';
import Footer from '../../src/components/Footer';
import Header from '../../src/components/Header';

export default function CheckoutBuntoapp() {
    return (
        <div className="bg-gradient-to-l top from-teal-50">
            <Header bgWhite />
            <main className="pt-28">
                <h2 className="text-3xl text-slate-600 font-bold w-1100 mx-auto">Checkout</h2>
                <Checkout />
            </main>
            <Footer />
        </div>
    );
}
