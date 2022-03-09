import Tooltip from "./Tooltip";

export default function TechnologyList({
  technologies,
  height = 25,
  gap = "gap-x-5",
  align = "center",
}) {
  return (
    <div
      className={`flex ${
        align === "center" ? "justify-center" : ""
      } ${gap} mt-7`}
    >
      {technologies.map((tech) => (
        <Tooltip text={tech.title} key={tech.id}>
          <img
            src={tech.icon}
            alt={`logo ${tech.title}`}
            style={{ height }}
            className="cursor-pointer"
          />
        </Tooltip>
      ))}
    </div>
  );
}
