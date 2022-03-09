import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import TechnologyList from "../UI/TechnologyList";
import ButtonAction from "./ButtonAction";
import PriceComp from "./PriceComp";

export default function ProductInfo({ data, imageLeft }) {
  return (
    <div className="flex-1">
      <h3 className="text-4xl flex gap-x-2 text-slate-700 font-bold mb-7">
        {imageLeft ? (
          <>
            {data.name}
            <span className="-top-2 text-slate-400 relative">
              <ImQuotesRight />
            </span>
          </>
        ) : (
          <>
            <span className="-top-2 text-slate-400 relative">
              <ImQuotesLeft />
            </span>
            {data.name}
          </>
        )}
      </h3>
      <PriceComp
        realPrice={data.realPrice}
        discount={data.discount}
        newPrice={data.newPrice}
      />
      <p className="text-lg text-slate-500 mt-4">{data.description}</p>
      <p className="text-lg text-slate-600 mt-4 mb-7">{data.features}</p>
      <TechnologyList technologies={data.technologies} align="left" />
      <ButtonAction data={data} />
    </div>
  );
}
