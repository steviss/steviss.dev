import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import type { LinkHTMLAttributes } from 'react'

export type IconLinkProps = Partial<LinkHTMLAttributes<HTMLAnchorElement>> & {
  target: string
  label: string
  icon: IconDefinition
}
