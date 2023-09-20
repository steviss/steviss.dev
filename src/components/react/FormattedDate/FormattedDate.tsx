import type { FC } from 'react'

import type { FormattedDateProps } from './FormattedDate.interface'

const FormattedDate: FC<FormattedDateProps> = ({ className, date }) => {
  return (
    <time className={className} dateTime={date.toISOString()}>
      {date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </time>
  )
}

export default FormattedDate
