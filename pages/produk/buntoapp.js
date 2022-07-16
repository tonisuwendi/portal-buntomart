import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import ProductDetail from '../../src/components/ProductDetail';
import { productBuntoapp } from '../../src/data/dummy/products';

export default function ProdukBuntoapp() {
    return (
        <>
            <Header />
            <main className="pt-5">
                <ProductDetail data={productBuntoapp} />
            </main>
            <Footer />
        </>
    );
}
