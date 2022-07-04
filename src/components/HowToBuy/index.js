import { useState } from 'react';

import howToBuy from '../../data/dummy/howToBuy';
import HowToBuyItem from './HowToBuyItem';
import ImageWrapper from './ImageWrapper';

export default function HowToBuy() {
    const [step, setStep] = useState({
        id: howToBuy[0].id,
        image: howToBuy[0].image,
    });

    const changeStepHandler = (data) => {
        setStep({
            id: data.id,
            image: data.image,
        });
    };

    return (
        <section className="flex relative items-center justify-center gap-x-10 w-1100 mx-auto mt-20">
            <ImageWrapper image={step.image} />
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-800">
                    Cara membelinya mudah
                    <br />
                    cuma 3 langkah!
                </h2>
                <div className="mt-10">
                    {howToBuy.map((data) => (
                        <HowToBuyItem
                            key={data.id}
                            data={data}
                            step={step}
                            onChangeStep={changeStepHandler}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
