import Form from './Form';
import Info from './Info';

export default function Checkout() {
    return (
        <section className="flex justify-between w-1100 mx-auto mt-10">
            <div className="w-[650px]">
                <Form />
            </div>
            <div className="w-[400px]">
                <Info />
            </div>
        </section>
    );
}
