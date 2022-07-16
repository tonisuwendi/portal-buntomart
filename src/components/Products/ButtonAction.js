import Link from 'next/link';
import PropTypes from 'prop-types';
import { IoPlay } from 'react-icons/io5';
import { HiEye } from 'react-icons/hi';

import Button from '../UI/Button';

export default function ButtonAction({ data }) {
    return (
        <div className="flex gap-x-3 mt-10">
            <Link href={data.demo}>
                <a>
                    <Button
                        disabled={!data.isReady}
                        title="Live Demo"
                        variant="outline-slate"
                        icon={<IoPlay />}
                    />
                </a>
            </Link>
            <Link href={`/produk/${data.slug}`}>
                <a>
                    <Button
                        disabled={!data.isReady}
                        title="Lihat Detail"
                        variant="secondary"
                        icon={<HiEye />}
                    />
                </a>
            </Link>
        </div>
    );
}

ButtonAction.propTypes = {
    data: PropTypes.shape({
        isReady: PropTypes.bool,
        demo: PropTypes.string,
        slug: PropTypes.string,
    }),
};

ButtonAction.defaultProps = {
    data: {
        isReady: false,
        demo: '',
        slug: '',
    },
};
