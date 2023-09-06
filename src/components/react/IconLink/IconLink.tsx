import { IconContainer } from '../IconContainer'
import type { IconLinkProps } from './IconLink.interface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/sharp-light-svg-icons'
import classNames from 'classnames'
import type { FC } from 'react'

const IconLink: FC<IconLinkProps> = ({ children, label, icon, className, ...props }) => {
  return (
    <a {...props} className={classNames('flex group relative items-center', className)}>
      <IconContainer className="relative px-2">
        <FontAwesomeIcon
          icon={icon}
          className="w-8 h-8 text-primary group-hover:scale-90 group-hover:text-secondary transition-color duration-300 ease-in-out"
        />
      </IconContainer>
      <span className="relative underline underline-offset-8 decoration-white group-hover:text-secondary text-white p-2 pr-8 whitespace-nowrap transition-color duration-300 ease-in-out">
        {label}
      </span>
      <IconContainer className="absolute right-[-10px] group-hover:right-0 bottom-2 px-2 group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out">
        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 text-white" />
      </IconContainer>
    </a>
  )
}

export default IconLink
