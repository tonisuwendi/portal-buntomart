let variantClasses;
let sizeClasses;
export default function Button({
  title,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  icon,
}) {
  switch (variant) {
    case "primary":
      variantClasses =
        "buntomart-bg-color-primary text-white buntomart-bg-color-primary-hover";
      break;
    case "secondary":
      variantClasses =
        "buntomart-bg-color-secondary text-white buntomart-bg-color-secondary-hover";
      break;
    case "light":
      variantClasses = "bg-white text-black hover:bg-slate-300";
      break;
    case "outline-primary":
      variantClasses =
        "bg-white box-border border buntomart-border-color-primary border-2 buntomart-text-color-primary hover:bg-slate-200";
      break;
  }
  switch (size) {
    case "md":
      sizeClasses = "h-10 px-5";
      break;
    case "lg":
      sizeClasses = "px-8 py-3 text-xl";
      break;
  }
  return (
    <button
      className={`transition flex gap-x-2 items-center duration-300 buntomart-rounded ${variantClasses} ${sizeClasses} ${className}`}
      type={type}
    >
      {icon}
      {title}
    </button>
  );
}
