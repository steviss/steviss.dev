import { atom, onSet } from 'nanostores'

export const isMenuOpen = atom(false)

onSet(isMenuOpen, ({ newValue }) => {
  if (newValue) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})
