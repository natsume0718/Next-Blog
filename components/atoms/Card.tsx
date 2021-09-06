export interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`px-6 py-4 bg-white rounded-lg shadow-md ${className || ''}`}>{children}</div>
  )
}
