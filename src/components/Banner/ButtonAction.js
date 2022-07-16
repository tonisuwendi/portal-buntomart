import Link from 'next/link';
import { IoWallet, IoPlay } from 'react-icons/io5';

import Button from '../UI/Button';

export default function ButtonAction() {
    return (
        <div className="flex justify-center gap-x-4 mt-10">
            <Button
                title="Lihat Demo"
                variant="outline-primary"
                size="lg"
                icon={<IoPlay />}
            />
            <Link href="/produk">
                <a>
                    <Button title="Beli Sekarang" size="lg" icon={<IoWallet />} />
                </a>
            </Link>
        </div>
    );
}
