import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmarkLarge } from '@fortawesome/sharp-solid-svg-icons'
import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import type { FC } from 'react'
import { useScrollbarWidth } from 'src/utility'

import { IconContainer } from 'src/components/react'

import { isMenuOpen } from 'src/stores'

import type { MenuButtonProps } from './MenuButton.interface'

const MenuButton: FC<MenuButtonProps> = ({ className, ...props }) => {
  useScrollbarWidth()
  const menuState = useStore(isMenuOpen)
  const handleToggleMenuState = () => isMenuOpen.set(!menuState)
  const menuIcon = menuState ? faXmarkLarge : faBars
  return (
    <button {...props} className={classNames('flex md:hidden', className)} onClick={handleToggleMenuState}>
      <IconContainer className="group px-2">
        <FontAwesomeIcon
          icon={menuIcon}
          className="w-7 h-7 text-primary group-hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer"
        />
      </IconContainer>
    </button>
  )
}

export default MenuButton
