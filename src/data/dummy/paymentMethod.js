module.exports = [
    {
        id: 'va',
        title: 'Transfer Virtual Account',
        data: [
            {
                id: 'bni_va',
                name: 'BNI Virtual Account',
                logo: '/images/logo-bni.png',
                payment_type: 'bank_transfer',
                bank_code: 'bni',
            },
            {
                id: 'bri_va',
                name: 'BRI Virtual Account',
                logo: '/images/logo-bri.png',
                payment_type: 'bank_transfer',
                bank_code: 'bri',
            },
            {
                id: 'mandiri_va',
                name: 'Mandiri Virtual Account',
                logo: '/images/logo-mandiri.png',
                payment_type: 'echannel',
            },
            {
                id: 'permata_va',
                name: 'Permata Virtual Account',
                logo: '/images/logo-permata.png',
                payment_type: 'permata',
            },
        ],
    },
    {
        id: 'emy',
        title: 'Uang Elektronik',
        data: [
            {
                id: 'emy_gopay',
                name: 'GoPay',
                logo: '/images/logo-gopay.png',
                payment_type: 'gopay',
            },
            {
                id: 'emy_qris',
                name: 'QRIS',
                logo: '/images/logo-qris.png',
                info: 'Scan menggunakan BCA mobile, DANA, OVO, ShopeePay, dll.',
                payment_type: 'qris',
            },
        ],
    },
    {
        id: 'cstore',
        title: 'Tunai di Gerai Ritel',
        data: [
            {
                id: 'cstore_alfamart',
                name: 'Alfamart',
                logo: '/images/logo-alfamart.png',
                payment_type: 'cstore',
            },
        ],
    },
];
