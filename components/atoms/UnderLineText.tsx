import Link from 'next/link'
import React from 'react'

export interface UnderLineBoldTextProps {
  text: string
  detailLink?: string
  className?: string
}

export function UnderLineText({ text, detailLink, className }: UnderLineBoldTextProps) {
  const nameClass = `hover:underline ${className || ''}`

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
