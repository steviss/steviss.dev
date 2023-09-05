import type { ToolBeltItemProps } from './ToolBeltItem.interface'
import classNames from 'classnames'
import type { FC } from 'react'

const ToolBeltItem: FC<ToolBeltItemProps> = ({ label, className, ...props }) => {
  return (
    <span {...props} className={classNames('text-2xl md:text-4xl font-nunito font-black text-primary', className)}>
      {label}
    </span>
  )
}

export default ToolBeltItem
