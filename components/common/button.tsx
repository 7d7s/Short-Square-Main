import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

interface DynamicButtonProps {
  textColor?: string;
  bgColor?: string;
  hoverTextColor?: string;
  hoverBgColor?: string;
  textD?: string;
}

const DynamicButton = ({
  textD = "Book A Call",
  textColor = "",
  bgColor = "bg-white/35",
  hoverTextColor = "",
  hoverBgColor = "",
}: DynamicButtonProps) => {
  return (
    <div className="group space-x-2 relative w-auto text-end flex justify-end items-center">
      <Link
        href="tel:+918882758944"
        className={`relative rounded-full font-semibold md:px-6 md:py-4 py-3 px-4 shadow-lg overflow-hidden ${textColor} ${bgColor} dark:text-white text-black backdrop-blur-md transition-all duration-500 ease-in-out flex items-center gap-2 group`}
      >
        <span
          className={`absolute inset-0  ${hoverBgColor} transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0`}
        ></span>
        <span
          className={`relative text-xs md:text-base z-10 flex items-center gap-2 uppercase ${hoverTextColor} ${textColor} `}
        >
          {textD}
        </span>
      </Link>
      <Link
        href="#"
        className={`relative rounded-full font-semibold lg:p-4 p-2 md:h-[50px] md:w-[50px] h-[35px] w-[35px] shadow-lg overflow-hidden dark:text-black text-white dark:bg-white bg-black transition-all duration-500 ease-in-out flex items-center justify-center gap-2 group`}
      >
        <MdArrowOutward className="" size={22} />
      </Link>
    </div>
  );
};

export default DynamicButton;
