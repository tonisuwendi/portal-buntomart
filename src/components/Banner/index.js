import DottedBg from "../UI/DottedBg";
import BannerInfo from "./BannerInfo";
import ButtonAction from "./ButtonAction";
import TechnologyList from "./TechnologyList";

export default function Banner() {
  return (
    <div className="pt-40 pb-20 relative bg-gradient-to-l top from-teal-50">
      <DottedBg top={90} />
      <BannerInfo />
      <TechnologyList />
      <ButtonAction />
    </div>
  );
}
