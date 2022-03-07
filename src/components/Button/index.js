import { styleVariable } from "../../config/variable";

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
      variantClasses = `bg-${styleVariable.primaryColor}-500 text-white hover:bg-${styleVariable.primaryColor}-700`;
      break;
    case "light":
      variantClasses = "bg-white text-black hover:bg-slate-300";
      break;
    case "outline-primary":
      variantClasses = `bg-white box-border border border-${styleVariable.primaryColor}-700 border-2 text-${styleVariable.primaryColor}-700 hover:bg-slate-200`;
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
      className={`transition flex gap-x-2 items-center duration-300 ${styleVariable.rounded} ${variantClasses} ${sizeClasses} ${className}`}
      type={type}
    >
      {icon}
      {title}
    </button>
  );
}
