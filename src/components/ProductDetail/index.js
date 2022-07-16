import Info from './Info';
import Preview from './Preview';
import { productBuntoapp } from '../../data/dummy/products';

export default function ProductDetail() {
    const { previewImg, name } = productBuntoapp;

    return (
        <section className="flex justify-between w-1100 mx-auto pt-24">
            <Preview previewImg={previewImg} name={name} />
            <Info data={productBuntoapp} />
        </section>
    );
}
