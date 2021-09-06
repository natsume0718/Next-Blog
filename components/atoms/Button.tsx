export interface ButtonProps {
  text: string | number
  className?: string
  disabled?: boolean
  handleClick?: (event: any) => void
}

export function Button({ className, disabled, text, handleClick }: ButtonProps) {
  if (typeof handleClick !== 'undefined') {
    return (
      <button
        className={`px-2 py-1 font-bold rounded
          ${className || ''}`}
        disabled={disabled}
        type="button"
        onClick={(e) => handleClick(e)}
      >
        {text}
      </button>
    )
  }
  return (
    <button
      disabled={disabled}
      className={`px-2 py-1 font-bold rounded
          ${className || ''}`}
      type="button"
    >
      {text}
    </button>
  )
}
