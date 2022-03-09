import DottedBg from "../UI/DottedBg";
import BannerInfo from "./BannerInfo";
import ButtonAction from "./ButtonAction";
import TechnologyList from "../UI/TechnologyList";
import { technologies } from "../../data/dummy/technologies";

export default function Banner() {
  return (
    <div className="pt-40 pb-20 relative bg-gradient-to-l top from-teal-50">
      <DottedBg top={90} />
      <BannerInfo />
      <TechnologyList technologies={technologies} height={27} gap="gap-x-8" />
      <ButtonAction />
    </div>
  );
}
