import type { HTMLAttributes } from 'react'

export type ToolBeltItemProps = Partial<HTMLAttributes<HTMLSpanElement>> & {
  label: string
}
