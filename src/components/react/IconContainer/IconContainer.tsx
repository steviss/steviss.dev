import type { IconContainerProps } from "./IconContainer.interface";
import type { FC } from "react";

const IconContainer: FC<IconContainerProps> = ({ children, ...props }) => {
  return <span {...props}>{children}</span>;
};

export default IconContainer;
