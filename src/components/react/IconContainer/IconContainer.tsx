import classNames from 'classnames'
import type { FC } from 'react'

import type { IconContainerProps } from './IconContainer.interface'

const IconContainer: FC<IconContainerProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={classNames('flex justify-center items-center', className)}>
      {children}
    </div>
  )
}

export default IconContainer
