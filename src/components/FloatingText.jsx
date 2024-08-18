
const FloatingText = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <div className="flex-1">
        <h6 className="font-semibold text-base text-center">{title}</h6>
      </div>
    </div>
  );
};

export default FloatingText;
