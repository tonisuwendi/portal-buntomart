import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

import Modal from './Modal';

export default function AlertTestimoni() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className="p-5 bg-teal-100 rounded-lg dark:bg-teal-200 w-1100 mx-auto"
                role="alert"
            >
                <div className="flex items-center">
                    <svg
                        className="mr-2 w-5 h-5 text-teal-700 dark:text-teal-800"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <h3 className="text-xl font-medium text-teal-700 dark:text-teal-800">
                        Belum ada testimoni
                    </h3>
                </div>
                <div className="mt-2 mb-4 text-teal-700 dark:text-teal-800">
                    Saat ini belum ada testimoni yang dapat ditampilkan. Yuk berikan
                    testimoni kamu terkait dengan produk Buntomart yang sudah kamu beli
                    dan dapatkan free update selama 6 bulan. Testimoni yang terpilih akan
                    muncul di sini.
                </div>
                <div className="flex">
                    <button
                        type="button"
                        className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium buntomart-rounded px-4 py-2 mr-2 text-center inline-flex items-center dark:bg-teal-800 dark:hover:bg-teal-900"
                        data-modal-toggle="createTestimonial"
                        onClick={() => setShowModal(true)}
                    >
                        Berikan Testimoni
                    </button>
                </div>
            </div>
            <Modal
                title="Kirim Testimoni"
                show={showModal}
                onClose={() => setShowModal(false)}
                onShow={setShowModal}
                confirmTextButton="Kirim"
                confirmIconButton={<FiSend />}
            >
                <p className="text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                    placeat odit deserunt ad animi voluptas modi iste ea. Ab a natus quis
                    quo adipisci rerum numquam voluptate reiciendis ipsum sapiente.
                </p>
            </Modal>
        </>
    );
}
