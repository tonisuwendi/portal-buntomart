export default function DottedBg({
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto",
}) {
  return (
    <img
      src="/images/dotted-bg.svg"
      alt="dotted bg"
      className="absolute w-48"
      style={{ zIndex: "-1", top, right, bottom, left }}
    />
  );
}
