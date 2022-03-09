export default function ProductImage({ image, name }) {
  return (
    <div className="flex-1">
      <img src={image} alt={`thumbnail ${name}`} />
    </div>
  );
}
