import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

import Banner from '../src/components/Banner';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import HowToBuy from '../src/components/HowToBuy';
import Products from '../src/components/Products';
import Testimonial from '../src/components/Testimonial';

export default function Home() {
    const howToBuyRef = useRef();
    const productRef = useRef();
    const testimonialRef = useRef();

    const router = useRouter();
    const sectionPage = router.query.section;

    const scrollToViewHandler = (reference) => {
        switch (reference) {
        case 'howToBuy':
            howToBuyRef.current.scrollIntoView({ behavior: 'smooth' });
            break;
        case 'product':
            productRef.current.scrollIntoView({ behavior: 'smooth' });
            break;
        case 'testimonial':
            testimonialRef.current.scrollIntoView({ behavior: 'smooth' });
            break;
        default:
        }
    };

    useEffect(() => {
        scrollToViewHandler(sectionPage);
    }, [router, sectionPage]);

    return (
        <>
            <Header onScrollToView={scrollToViewHandler} />
            <main>
                <Banner />
                <div ref={howToBuyRef} />
                <HowToBuy />
                <div ref={productRef} />
                <Products />
                <div ref={testimonialRef} />
                <Testimonial />
            </main>
            <Footer />
        </>
    );
}
