import { buntoappTech, buntoshopTech } from './technologies';

export const productBuntoapp = {
    id: 'b1',
    slug: 'buntoapp',
    name: 'Buntoapp',
    realPrice: '500.000',
    discount: '40%',
    newPrice: '300.000',
    features:
        'Fitur unggulan: Midtrans, Rajaongkir untuk menghitung ongkos kirim dengan banyak ekspedisi, flash sale, blog, dll.',
    technologies: buntoappTech,
    image: 'https://www.hyperthe.me/images/hero-image-1.png',
    previewImg: '/images/preview-buntoapp.png',
    demo: 'https://google.com',
    isReady: true,
    description:
        'Source code website toko online dengan fitur yang lengkap, harga super murah, dan sekali bayar membantu mengembangkan bisnismu agar terlihat lebih profesional. Tampilan mobile karena kebanyakan orang mengakses website melalui hp. Banyak pengaturan dan opsi yang bisa kamu sesuaikan sendiri.',
    informations: [
        {
            id: 'i1',
            key: 'Terjual',
            value: '28 kali',
        },
        {
            id: 'i2',
            key: 'Di Rilis',
            value: '2 Agustus 2022',
        },
        {
            id: 'i3',
            key: 'Terakhir Update',
            value: '2 minggu lalu',
        },
        {
            id: 'i4',
            key: 'Versi',
            value: '1.0.2',
        },
        {
            id: 'i5',
            key: 'Platform',
            value: 'Website',
        },
        {
            id: 'i6',
            key: 'Kategori',
            value: 'Online Shop',
        },
    ],
};

export const productBuntoshop = {
    id: 'b2',
    slug: 'buntoshop',
    name: 'Buntoshop (Coming Soon)',
    realPrice: '400.000',
    discount: '37%',
    newPrice: '252.000',
    features:
        'Fitur unggulan: Midtrans, Rajaongkir, flash sale, tampilan responsif di berbagai ukuran, dll.',
    technologies: buntoshopTech,
    image: 'https://www.hyperthe.me/images/feature-0.png',
    previewImg: '/images/preview-buntoapp.png',
    demo: 'https://google.com',
    isReady: false,
    description:
        'Source code website toko online dengan fitur yang lengkap, harga super murah, dan sekali bayar membantu mengembangkan bisnismu agar terlihat lebih profesional. Tampilan responsif di berbagai ukuran device.',
};
