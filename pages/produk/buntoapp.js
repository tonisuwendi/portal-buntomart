import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import ProductDetail from '../../src/components/ProductDetail';

export default function ProdukBuntoapp() {
    return (
        <>
            <Header />
            <main className="pt-5">
                <ProductDetail />
            </main>
            <Footer />
        </>
    );
}
