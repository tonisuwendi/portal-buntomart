export default function NumberItem({ stepId, data }) {
  return (
    <h4
      className={`text-md absolute -top-3 -left-3 flex justify-center items-center buntomart-rounded w-8 h-8 ${
        stepId === data.id
          ? "buntomart-bg-color-primary text-white"
          : "bg-slate-50 text-slate-700 border border-slate-300"
      } font-bold transition`}
    >
      {data.number}
    </h4>
  );
}
