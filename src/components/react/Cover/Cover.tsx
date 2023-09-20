import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkLarge } from '@fortawesome/sharp-solid-svg-icons'
import { useStore } from '@nanostores/react'
import { AnimatePresence, motion } from 'framer-motion'
import type { FC } from 'react'

import { IconContainer } from 'src/components/react'

import { isMenuOpen } from 'src/stores'

import { COVER_ANIMATION } from './Cover.consts'

const Cover: FC = () => {
  const menuState = useStore(isMenuOpen)
  const handleToggleMenuState = () => isMenuOpen.set(!menuState)

  return (
    <AnimatePresence>
      {menuState && (
        <motion.div
          key="cover"
          animate="open"
          initial="close"
          exit="close"
          variants={COVER_ANIMATION}
          className="fixed hidden inset-0 bg-bg-primary cursor-pointer z-20"
          onClick={handleToggleMenuState}
        >
          <IconContainer className="absolute top-0 right-0 group p-12 hidden md:block">
            <FontAwesomeIcon
              icon={faXmarkLarge}
              className="w-7 h-7 text-white group-hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer"
            />
          </IconContainer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Cover
