import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { MdLogin } from 'react-icons/md';

import Button from '../UI/Button';
import Menu from './Menu';

export default function Header({ onScrollToView }) {
    const [headerClasses, setHeaderClasses] = useState('');

    const router = useRouter();

    useEffect(() => {
        window.onscroll = () => {
            const scroll = window.scrollY;
            if (scroll > 60) {
                setHeaderClasses('bg-white shadow-sm');
            } else {
                setHeaderClasses('');
            }
        };

        return () => setHeaderClasses('');
    }, []);

    const scrollToViewHandler = (reference) => {
        if (onScrollToView === null) {
            router.push(`/?section=${reference}`);
        } else {
            onScrollToView(reference);
        }
    };

    return (
        <nav
            className={`py-4 h-20 flex items-center fixed z-10 w-full transition ${headerClasses}`}
        >
            <div className="flex items-center justify-between mx-auto w-1100">
                <div className="flex items-center">
                    <Link href="/">
                        <a>
                            <img
                                src="/images/logo-buntomart-dark.svg"
                                className="h-36"
                                alt="logo buntomart"
                            />
                        </a>
                    </Link>
                    <Menu onScrollToView={scrollToViewHandler} />
                </div>
                <Button title="Login" icon={<MdLogin />} />
            </div>
        </nav>
    );
}

Header.propTypes = {
    onScrollToView: PropTypes.func,
};

Header.defaultProps = {
    onScrollToView: null,
};
