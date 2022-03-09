export default function HorizontalLine({
  center = false,
  width = "w-24",
  my = "my-4",
}) {
  return (
    <div
      className={`${width} h-1 rounded-full buntomart-bg-color-primary ${
        center ? "mx-auto" : ""
      } ${my}`}
    />
  );
}
