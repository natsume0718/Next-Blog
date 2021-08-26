/* eslint-disable @next/next/no-img-element */
import { NamedAvatar, NamedAvatarProps } from '../molecule/NamedAvatar'
import { Card } from '../atoms/Card'
import dayjs from 'dayjs'
import { UnderLineText } from '../atoms/UnderLineText'
import { Tag } from '../atoms/Tag'

export interface PostProps {
  date: string
  title: string
  description: string
  authorName: string
  authorSrc: string
  tagName: string
}

export function Post(props: PostProps) {
  const day = dayjs(props.date).format('MMM D, YYYY')
  return (
    <Card className="max-w-4xl px-10 py-6 mx-auto">
      <div className="flex items-center justify-between">
        <span className="font-light text-gray-600">{day}</span>
        <Tag text={props.tagName} />
      </div>
      <div className="mt-2">
        <UnderLineText className={`text-gray-700 text-2xl font-bold`} text={props.title} />
        <p className="mt-2 text-gray-600">{props.description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <UnderLineText className="text-blue-500" text="Read more" />
        <div className={`inline-flex list-none justify-center items-center`}>
          <NamedAvatar name={props.authorName} src={props.authorSrc} circle={true} />
        </div>
      </div>
    </Card>
  )
}
