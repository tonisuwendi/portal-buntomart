import HorizontalLine from "../UI/HorizontalLine";
import ProductItem from "./ProductItem";
import { productBuntoapp, productBuntoshop } from "../../data/dummy/products";

export default function Products() {
  return (
    <section className="w-1100 mx-auto mt-32">
      <h2 className="text-4xl text-center font-bold text-slate-800">
        Produk buatan Buntomart
      </h2>
      <p className="text-lg mt-1 text-center text-slate-500">
        Kamu bisa memilih salah satu atau semuanya sesuai keinginan.
      </p>
      <HorizontalLine center />
      <ProductItem data={productBuntoapp} />
      <ProductItem data={productBuntoshop} imageLeft />
    </section>
  );
}