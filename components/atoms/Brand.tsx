import Link from 'next/link'

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
      <a className={`text-xl font-bold md:text-2xl ${className || ''}`}>{brand}</a>
    </Link>
  )
}
