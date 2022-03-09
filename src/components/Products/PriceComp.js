export default function PriceComp({ realPrice, discount, newPrice }) {
  return (
    <>
      <div className="flex items-center gap-x-2 mb-1">
        <p className="text-xl line-through text-slate-400">Rp{realPrice}</p>
        <span className="px-1 py-1 bg-red-500 text-sm buntomart-rounded text-white font-semibold">
          {discount}
        </span>
      </div>
      <h3 className="text-2xl text-slate-800 font-black text-indigo-500">
        Rp<span className="text-3xl">{newPrice}</span>
      </h3>
    </>
  );
}
