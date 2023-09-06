import { atom, onSet } from 'nanostores'

export const isMenuOpen = atom(false)

onSet(isMenuOpen, ({ newValue }) => {
  if (newValue) {
    document.body.classList.add('lock-scroll')
  } else {
    document.body.classList.remove('lock-scroll')
  }
})
