import { MOBILE_MENU_ANIMATION } from './MobileMenu.consts'
import type { MobileMenuProps } from './MobileMenu.interface'
import { useStore } from '@nanostores/react'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { isMenuOpen } from 'src/stores'

const MobileMenu: FC<MobileMenuProps> = ({ children }) => {
  const menuState = useStore(isMenuOpen)
  return (
    <motion.div
      layout
      className={'fixed flex md:hidden flex-col min-w-full max-w-full bg-bg-secondary shadow-md z-30 bottom-0'}
      animate={menuState ? 'open' : 'close'}
      variants={MOBILE_MENU_ANIMATION}
      initial="close"
    >
      <nav className="flex flex-col p-8">
        <ul className="flex flex-col list-none">{children}</ul>
      </nav>
    </motion.div>
  )
}

export default MobileMenu
