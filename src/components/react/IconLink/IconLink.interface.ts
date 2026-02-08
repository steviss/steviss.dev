import type { LucideIcon } from 'lucide-react'
import type { LinkHTMLAttributes } from 'react'

export type IconLinkProps = Partial<LinkHTMLAttributes<HTMLAnchorElement>> & {
  target: string
  label: string
  icon: LucideIcon
}
