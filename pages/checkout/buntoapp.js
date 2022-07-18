import Checkout from '../../src/components/Checkout';
import Footer from '../../src/components/Footer';
import Header from '../../src/components/Header';
import HorizontalLine from '../../src/components/UI/HorizontalLine';
import { productBuntoapp } from '../../src/data/dummy/products';

export default function CheckoutBuntoapp() {
    return (
        <div className="bg-gradient-to-l top from-teal-50">
            <Header bgWhite />
            <main className="pt-[100px]">
                <h2 className="text-3xl text-center text-slate-600 font-bold w-1100 mx-auto">Checkout</h2>
                <HorizontalLine center />
                <Checkout productData={productBuntoapp} />
            </main>
            <Footer />
        </div>
    );
}
