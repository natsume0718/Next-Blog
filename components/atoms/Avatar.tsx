import Image from 'next/image'

export interface Option {
  value?: number | string
  text: string
}
export interface AvatarProps {
  src: string
  circle?: boolean
  alt?: string
}

export function Avatar({ src, alt, circle }: AvatarProps) {
  return (
    <Image
      src={src}
      layout="fill"
      alt={alt || 'avatar'}
      className={`object-cover w-10 h-10 mx-4 ${circle ? 'rounded-full' : ''}`}
    />
  )
}
