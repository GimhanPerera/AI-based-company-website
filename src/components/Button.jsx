import React from "react";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hoover:text-click-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const renderButton = () => (
    <button className={`p-[3px] relative ${className || ""}`}>
      <a className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {children}
        </div>
    </button>
  );
  


  return renderButton();
};

export default Button;
