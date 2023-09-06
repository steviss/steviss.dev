import type { MainMenuProps } from './MainMenu.interface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmarkLarge } from '@fortawesome/sharp-solid-svg-icons'
import { useStore } from '@nanostores/react'
import type { FC } from 'react'
import { IconContainer } from 'src/components/react'
import { isMenuOpen } from 'src/stores'
import { useScrollbarWidth } from 'src/utility'

const MainMenu: FC<MainMenuProps> = ({ children }) => {
  useScrollbarWidth()
  const menuState = useStore(isMenuOpen)
  const handleToggleMenuState = () => isMenuOpen.set(!menuState)
  const menuIcon = menuState ? faXmarkLarge : faBars
  return (
    <>
      <div className="flex">
        <div className="flex md:hidden">
          <button className="flex" onClick={handleToggleMenuState}>
            <IconContainer className="group px-2">
              <FontAwesomeIcon
                icon={menuIcon}
                className="w-7 h-7 text-primary group-hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer"
              />
            </IconContainer>
          </button>
        </div>
      </div>
      <nav className="relative hidden md:flex">
        <ul className="flex flex-row list-none">{children}</ul>
      </nav>
    </>
  )
}

export default MainMenu
