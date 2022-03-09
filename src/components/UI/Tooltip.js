import React from "react";

export default function Tooltip({ children, text }) {
  const tipRef = React.createRef(null);

  const handleMouseEnter = () => {
    tipRef.current.style.opacity = 1;
    tipRef.current.style.marginBottom = "100px";
  };

  const handleMouseLeave = () => {
    tipRef.current.style.opacity = 0;
    tipRef.current.style.marginBottom = "90px";
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute whitespace-no-wrap bg-black text-white px-3 py-2 rounded flex items-center transition-all duration-150"
        style={{
          left: "50%",
          marginBottom: 90,
          transform: "translate(-50%,0)",
          opacity: 0,
        }}
        ref={tipRef}
      >
        <div
          className="bg-black h-3 w-3 absolute"
          style={{
            left: "50%",
            bottom: "-5px",
            transform: "translate(-50%,0) rotate(45deg)",
          }}
        />
        <span className="text-sm">{text}</span>
      </div>
      {children}
    </div>
  );
}
