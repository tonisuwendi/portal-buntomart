import Link from 'next/link';
import PropTypes from 'prop-types';
import { GoStar } from 'react-icons/go';

export default function MenuItem({
    title, slug, reference, onScrollToView,
}) {
    const scrollIntoViewHandler = () => {
        if (slug) return;
        onScrollToView(reference);
    };

    const anchorTagElement = (
        <a
            className="flex items-center gap-x-1 px-4 py-2.5 transition duration-200 hover:bg-slate-100 text-slate-500 hover:text-slate-800 font-medium text-sm2 buntomart-rounded"
            onClick={scrollIntoViewHandler}
            onKeyDown={scrollIntoViewHandler}
            role="button"
            tabIndex={0}
        >
            {title === 'Afiliasi' && <GoStar />}
            {title}
        </a>
    );

    if (slug) {
        return (
            <li>
                <Link href={slug}>
                    {anchorTagElement}
                </Link>
            </li>
        );
    }

    return anchorTagElement;
}

MenuItem.propTypes = {
    title: PropTypes.string,
    slug: PropTypes.string,
    reference: PropTypes.string,
    onScrollToView: PropTypes.func.isRequired,
};

MenuItem.defaultProps = {
    title: '',
    slug: '',
    reference: '',
};
