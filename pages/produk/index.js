import Header from '../../src/components/Header';
import Products from '../../src/components/Products';
import Footer from '../../src/components/Footer';

export default function Produk() {
    return (
        <>
            <Header />
            <main className="pt-5">
                <Products />
            </main>
            <Footer />
        </>
    );
}
