import { themeColor } from '../../config'

export interface FoldingProps {
  className?: string
}

export function Folding({ className }: FoldingProps) {
  return (
    <button
      type="button"
      className={`block text-${themeColor}-800 hover:text-${themeColor}-600 focus:text-${themeColor}-600 focus:outline-none ${
        className || ''
      }`}
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
      </svg>
    </button>
  )
}
