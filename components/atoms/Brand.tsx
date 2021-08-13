import Image from 'next/image'
import Link from 'next/link'
import { themeColor } from '../../config'

export interface Option {
  value?: number | string
  text: string
}
export interface BrandProps {
  brand: string
  className?: string
}

export function Brand({ brand, className }: BrandProps) {
  return (
    <Link href="/">
      <a className={`text-xl font-bold text-${themeColor}-800 md:text-2xl ${className || ''}`}>
        {brand}
      </a>
    </Link>
  )
}
