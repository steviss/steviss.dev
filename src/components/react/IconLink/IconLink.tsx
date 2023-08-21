import { IconContainer } from "../IconContainer";
import type { IconLinkProps } from "./IconLink.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

const IconLink: FC<IconLinkProps> = ({ children, label, icon, ...props }) => {
  return (
    <a
      {...props}
      className="flex group relative mr-2 items-center relative text-black rounded overflow-hidden gradient-bg-before before:absolute before:content-[''] before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-100"
    >
      <IconContainer className="flex justify-center items-center relative px-2 rounded-l-full">
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      </IconContainer>
      <span className="relative bg-gray-50 group-hover:bg-white p-2 whitespace-nowrap text-black rounded-r transition-background duration-300 ease-in-out">
        {label}
      </span>
    </a>
  );
};

export default IconLink;
