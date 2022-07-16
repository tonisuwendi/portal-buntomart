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
    isReady: true,
    description:
        'Source code website toko online dengan fitur yang lengkap, harga super murah, dan sekali bayar membantu mengembangkan bisnismu agar terlihat lebih profesional. Tampilan mobile karena kebanyakan orang mengakses website melalui hp. Banyak pengaturan dan opsi yang bisa kamu sesuaikan sendiri.',
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
    isReady: false,
    description:
        'Source code website toko online dengan fitur yang lengkap, harga super murah, dan sekali bayar membantu mengembangkan bisnismu agar terlihat lebih profesional. Tampilan responsif di berbagai ukuran device.',
};
