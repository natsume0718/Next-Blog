import { Avatar, AvatarProps } from '../atoms/Avatar'
import Link from 'next/link'
import React from 'react'

export interface INamed {
  name: string
  className?: string
  detailLink?: string
}

export type NamedAvatarProps = INamed & AvatarProps

export function NamedAvatar(props: NamedAvatarProps) {
  const nameClass = `font-bold text-gray-700 hover:underline ${props.className}`
  return (
    <React.Fragment>
      <Avatar src={props.src} alt={props.alt} circle={props.circle}></Avatar>
      {props.detailLink ? (
        <Link href={props.detailLink}>
          <a className={nameClass}>{props.name}</a>
        </Link>
      ) : (
        <span className={nameClass}>{props.name}</span>
      )}
    </React.Fragment>
  )
}
