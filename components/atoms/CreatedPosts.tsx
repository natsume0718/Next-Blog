export interface CreatedPostsProps {
  counts: number
  className?: string
}

export function CreatedPosts({ counts, className }: CreatedPostsProps) {
  return (
    <div className={`text-sm font-light text-gray-700 ${className || ''}`}>
      Created {counts} Posts
    </div>
  )
}
