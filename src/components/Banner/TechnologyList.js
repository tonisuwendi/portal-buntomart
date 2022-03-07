import Tooltip from "../UI/Tooltip";
import { technologies } from "../../data/dummy/technologies";

export default function TechnologyList() {
  return (
    <div className="flex justify-center gap-x-8 mt-7">
      {technologies.map((tech) => (
        <Tooltip text={tech.title} key={tech.id}>
          <img
            src={tech.icon}
            alt={`logo ${tech.title}`}
            style={{ height: 27 }}
            className="cursor-pointer"
          />
        </Tooltip>
      ))}
    </div>
  );
}
