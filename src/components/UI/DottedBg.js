export default function DottedBg({
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto",
  color = false,
}) {
  return (
    <img
      src={`/images/dotted-bg${color ? "-green" : ""}.svg`}
      alt="dotted bg"
      className="absolute w-48"
      style={{ zIndex: "-1", top, right, bottom, left }}
    />
  );
}
