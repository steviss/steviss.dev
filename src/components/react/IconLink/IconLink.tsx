import { IconContainer } from "../IconContainer";
import type { IconLinkProps } from "./IconLink.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import type { FC } from "react";

const IconLink: FC<IconLinkProps> = ({
  children,
  label,
  icon,
  className,
  ...props
}) => {
  return (
    <a
      {...props}
      className={classNames("flex group relative items-center", className)}
    >
      <IconContainer className="flex justify-center items-center relative px-2 rounded-l-full">
        <FontAwesomeIcon
          icon={icon}
          className="w-8 h-8 text-primary group-hover:text-secondary transition-color duration-300 ease-in-out"
        />
      </IconContainer>
      <span className="relative underline underline-offset-8 decoration-white group-hover:text-secondary text-white p-2 whitespace-nowrap transition-color duration-300 ease-in-out">
        {label}
      </span>
    </a>
  );
};

export default IconLink;
