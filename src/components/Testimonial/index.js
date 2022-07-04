import { useState } from 'react';
import { toast } from 'react-toastify';
import { FiSend } from 'react-icons/fi';

import AlertInfo from './AlertInfo';
import Modal from '../UI/Modal';
import Input from '../UI/form/Input';
import Textarea from '../UI/form/Textarea';
import { insertTestimonial } from '../../api/testimoni';

export default function Testimonial() {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [enteredName, setEnteredName] = useState('');
    const [enteredJob, setEnteredJob] = useState('');
    const [enteredTestimonial, setEnteredTestimonial] = useState('');

    const sendTestimonialHandler = async () => {
        setIsLoading(true);
        const payload = {
            name: enteredName,
            job: enteredJob,
        };
        try {
            const res = await insertTestimonial(payload);
            if (!res.success) throw new Error(res.msg);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const changeNameHandler = (event) => {
        const { value } = event.target;
        setEnteredName(value);
    };

    const changeJobHandler = (event) => {
        const { value } = event.target;
        setEnteredJob(value);
    };

    const changeTestimonialHandler = (event) => {
        const { value } = event.target;
        setEnteredTestimonial(value);
    };

    return (
        <>
            <AlertInfo onShowModal={() => setShowModal(true)} />
            <Modal
                title="Kirim Testimoni"
                show={showModal}
                onClose={() => setShowModal(false)}
                confirmTextButton="Kirim"
                confirmActionButton={sendTestimonialHandler}
                confirmIconButton={<FiSend />}
                confirmButtonDisabled={!enteredName || !enteredJob || !enteredTestimonial}
                isLoading={isLoading}
            >
                <Input
                    id="name"
                    label="Nama Lengkap"
                    textHelper="Maksimal 50 karakter"
                    value={enteredName}
                    onChange={changeNameHandler}
                    required
                />
                <Input
                    id="job"
                    label="Pekerjaan"
                    value={enteredJob}
                    onChange={changeJobHandler}
                    required
                />
                <Textarea
                    id="content"
                    label="Testimoni"
                    value={enteredTestimonial}
                    onChange={changeTestimonialHandler}
                    required
                />
            </Modal>
        </>
    );
}
