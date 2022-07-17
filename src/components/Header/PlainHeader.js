import Link from 'next/link';
import PropTypes from 'prop-types';

import HorizontalLine from '../UI/HorizontalLine';

export default function PlainHeader({ title }) {
    return (
        <header className="flex flex-col items-center w-full py-10">
            <Link href="/">
                <a className="mb-3">
                    <img
                        src="/images/logo-buntomart-dark.png"
                        className="w-40"
                        alt="logo buntomart"
                    />
                </a>
            </Link>
            <HorizontalLine center />
            <h3 className="text-center text-3xl text-slate-700 font-bold mt-3">{title}</h3>
        </header>
    );
}

PlainHeader.propTypes = {
    title: PropTypes.string,
};

PlainHeader.defaultProps = {
    title: '',
};
