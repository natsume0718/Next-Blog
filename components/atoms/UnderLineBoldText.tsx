import Link from 'next/link'
import React from 'react'
import { themeColor } from '../../config'

export interface UnderLineBoldTextProps {
  text: string
  detailLink?: string
  className?: string
}

export function UnderLineBoldText({ text, detailLink, className }: UnderLineBoldTextProps) {
  const nameClass = `font-bold text-${themeColor}-700 hover:underline ${className || ''}`

  return (
    <React.Fragment>
      {detailLink ? (
        <Link href={detailLink}>
          <a className={nameClass}>{text}</a>
        </Link>
      ) : (
        <span className={nameClass}>{text}</span>
      )}
    </React.Fragment>
  )
}
