import { Button, ButtonProps } from './Button'

export type TagProps = ButtonProps

export function Tag({ text, handleClick }: TagProps) {
  const classes = `text-gray-100 bg-gray-600  hover:bg-gray-500`

  return Button({ className: classes, text, handleClick })
}
