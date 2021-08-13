import { Avatar, AvatarProps } from '../atoms/Avatar'
import Link from 'next/link'
import React from 'react'
import { themeColor } from '../../config'
import { UnderLineBoldText } from '../atoms/UnderLineBoldText'

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
      <UnderLineBoldText
        text={props.name}
        className={props.className}
        detailLink={props.detailLink}
      ></UnderLineBoldText>
    </React.Fragment>
  )
}
