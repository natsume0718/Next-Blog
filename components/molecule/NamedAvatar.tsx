import { Avatar, AvatarProps } from '../atoms/Avatar'
import React from 'react'
import { UnderLineText } from '../atoms/UnderLineText'

export interface INamed {
  name: string
  className?: string
  detailLink?: string
}

export type NamedAvatarProps = INamed & AvatarProps

export function NamedAvatar(props: NamedAvatarProps) {
  return (
    <React.Fragment>
      <Avatar src={props.src} alt={props.alt} circle={props.circle}></Avatar>
      <UnderLineText
        text={props.name}
        className={`font-bold text-gray-700`}
        detailLink={props.detailLink}
      />
    </React.Fragment>
  )
}
