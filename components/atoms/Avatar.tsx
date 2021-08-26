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
    <span className="mx-4">
      <Image
        src={src}
        width={40}
        height={40}
        alt={alt || 'avatar'}
        className={`object-cover ${circle ? 'rounded-full' : ''}`}
      />
    </span>
  )
}
