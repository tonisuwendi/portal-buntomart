import { LightSpinner, DarkSpinner } from "../Icons/Spinner";

let variantClasses;
let sizeClasses;
let isDark = true;
export default function Button({
  title,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  icon,
  loading,
  loadingText = "Loading...",
}) {
  switch (variant) {
    case "primary":
      isDark = true;
      variantClasses =
        "buntomart-bg-color-primary text-white buntomart-bg-color-primary-hover";
      break;
    case "secondary":
      isDark = true;
      variantClasses =
        "buntomart-bg-color-secondary text-white buntomart-bg-color-secondary-hover";
      break;
    case "light":
      isDark = false;
      variantClasses = "bg-white text-black hover:bg-slate-300";
      break;
    case "outline-primary":
      isDark = false;
      variantClasses =
        "bg-white box-border border buntomart-border-color-primary border-2 buntomart-text-color-primary hover:bg-slate-200";
      break;
    case "outline-slate":
      isDark = false;
      variantClasses =
        "bg-white box-border border border-slate-300 border-1 text-slate-600 hover:bg-slate-200";
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
      disabled={disabled}
      className={`transition disabled:opacity-50 disabled:cursor-not-allowed flex gap-x-2 items-center duration-300 buntomart-rounded ${variantClasses} ${sizeClasses} ${className}`}
      type={type}
      onClick={onClick}
    >
      {loading ? (
        isDark ? (
          <>
            <LightSpinner />
            {loadingText}
          </>
        ) : (
          <>
            <DarkSpinner />
            {loadingText}
          </>
        )
      ) : (
        <>
          {icon}
          {title}
        </>
      )}
    </button>
  );
}
