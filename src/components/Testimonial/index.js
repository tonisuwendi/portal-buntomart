import { useState } from 'react';
import { toast } from 'react-toastify';
import { FiSend } from 'react-icons/fi';

import AlertInfo from './AlertInfo';
import Modal from '../UI/Modal';
import Input from '../UI/form/Input';
import Textarea from '../UI/form/Textarea';
import { insertTestimonial } from '../../api/endpoints';

export default function Testimonial() {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [enteredName, setEnteredName] = useState('');
    const [enteredJob, setEnteredJob] = useState('');
    const [enteredTestimonial, setEnteredTestimonial] = useState('');
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        job: '',
        message: '',
    });

    const resetFormHandler = () => {
        setEnteredName('');
        setEnteredJob('');
        setEnteredTestimonial('');
    };

    const sendTestimonialHandler = async () => {
        setIsLoading(true);
        const payload = {
            name: enteredName,
            job: enteredJob,
            message: enteredTestimonial,
        };
        try {
            const res = await insertTestimonial(payload);
            if (!res.success) throw new Error(JSON.stringify(res));
            resetFormHandler();
            setShowModal(false);
            toast.success(res.message);
        } catch (error) {
            const {
                error_name: errorName,
                error_job: errorJob,
                error_message: errorTesti,
            } = JSON.parse(error.message);
            setErrorMessage({
                name: errorName,
                job: errorJob,
                message: errorTesti,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const changeNameHandler = (event) => {
        const { value } = event.target;
        setEnteredName(value);
        setErrorMessage((prevState) => ({ ...prevState, name: '' }));
    };

    const changeJobHandler = (event) => {
        const { value } = event.target;
        setEnteredJob(value);
        setErrorMessage((prevState) => ({ ...prevState, job: '' }));
    };

    const changeTestimonialHandler = (event) => {
        const { value } = event.target;
        setEnteredTestimonial(value);
        setErrorMessage((prevState) => ({ ...prevState, message: '' }));
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
                    inputError={errorMessage.name}
                    onChange={changeNameHandler}
                    required
                />
                <Input
                    id="job"
                    label="Pekerjaan"
                    value={enteredJob}
                    inputError={errorMessage.job}
                    onChange={changeJobHandler}
                    required
                />
                <Textarea
                    id="content"
                    label="Testimoni"
                    value={enteredTestimonial}
                    inputError={errorMessage.message}
                    onChange={changeTestimonialHandler}
                    required
                />
            </Modal>
        </>
    );
}
