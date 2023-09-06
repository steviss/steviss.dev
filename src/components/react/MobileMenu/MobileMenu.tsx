import { MOBILE_MENU_ANIMATION } from './MobileMenu.consts'
import type { MobileMenuProps } from './MobileMenu.interface'
import { useStore } from '@nanostores/react'
import { AnimatePresence, motion } from 'framer-motion'
import type { FC } from 'react'
import { isMenuOpen } from 'src/stores'

const MobileMenu: FC<MobileMenuProps> = ({ children }) => {
  const menuState = useStore(isMenuOpen)
  return (
    <AnimatePresence>
      {menuState && (
        <motion.div
          key="mobile-menu"
          layout
          className="fixed flex md:hidden flex-col max-w-screen max-h-d-screen bg-bg-secondary shadow-md z-30 bottom-0 left-0 right-0"
          animate={menuState ? 'open' : 'close'}
          variants={MOBILE_MENU_ANIMATION}
          initial="close"
        >
          <nav className="flex flex-col p-8">
            <ul className="flex flex-col list-none">{children}</ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
