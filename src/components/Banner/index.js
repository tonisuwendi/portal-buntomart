import DottedBg from "../UI/DottedBg";
import BannerInfo from "./BannerInfo";
import ButtonAction from "./ButtonAction";
import TechnologyList from "./TechnologyList";

export default function Banner() {
  return (
    <div className="pt-20 pb-10 relative">
      <DottedBg top={10} />
      <BannerInfo />
      <TechnologyList />
      <ButtonAction />
      <DottedBg bottom={0} right={0} />
    </div>
  );
}
