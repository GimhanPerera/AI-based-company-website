import { bird } from "../../assets";


export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.1] top-9">
        <img
          className="w-full h-full object-cover"
          src={bird}
          alt="bird"
        />
      </div>
    </div>
  );
};
