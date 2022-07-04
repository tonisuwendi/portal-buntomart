import Banner from '../src/components/Banner';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import HowToBuy from '../src/components/HowToBuy';
import Products from '../src/components/Products';
import Testimonial from '../src/components/Testimonial';

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <HowToBuy />
            <Products />
            <Testimonial />
            <Footer />
        </>
    );
}
