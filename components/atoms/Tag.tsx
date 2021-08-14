export interface TagProps {
  text: string
  className?: string
  handleClick?: (event: any) => void
}

export function Tag({ className, text, handleClick }: TagProps) {
  if (handleClick) {
    return (
      <button
        className={`px-2 py-1 font-bold rounded
          ${className || ''}`}
        type="button"
        onClick={(e) => handleClick(e)}
      >
        {text}
      </button>
    )
  }
  return (
    <button
      className={`px-2 py-1 font-bold rounded
          ${className || ''}`}
      type="button"
    >
      {text}
    </button>
  )
}
