export const COVER_ANIMATION = {
  open: {
    opacity: 0.65,
    display: 'flex',
  },
  close: {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  },
}
