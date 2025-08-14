interface StickyButtonProps {
  text?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const StickyButton: React.FC<StickyButtonProps> = ({
  text = "Get a Quick Quotation",
  backgroundColor = "orange",
  onClick,
}) => {
  return (
    <button
      className={`sticky left-full top-1/2 -rotate-90 text-white px-[30px] py-[20px] rounded-t-xl border-0 text-[16px] font-bold cursor-pointer -mr-[5vw]`}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default StickyButton;
