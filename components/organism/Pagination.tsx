import React from 'react'
import { Button } from '../atoms/Button'

export interface PaginationProps {
  length: number
  current: number
  to: string
}

export function Pagination(props: PaginationProps) {
  const click = () => {
    location.href = props.to
  }
  const baseClasses = 'mx-1 font-medium text-gray-700 bg-white '
  const notDisabled = 'hover:bg-blue-500 hover:text-white'
  return (
    <div className="flex">
      <Button
        text="previous"
        disabled={props.current === 1}
        className={
          baseClasses + (props.current === 1 ? 'text-gray-200  cursor-not-allowed' : notDisabled)
        }
      />
      {[...Array(props.length)].map((_, i) => {
        i = i + 1
        const disabled = props.current === i
        return (
          <Button
            className={baseClasses + (disabled ? 'bg-gray-300 cursor-not-allowed' : notDisabled)}
            disabled={disabled}
            key={i}
            text={i}
            handleClick={click}
          />
        )
      })}
      <Button
        className={
          baseClasses +
          (props.length <= props.current + 1 ? 'text-gray-200 cursor-not-allowed' : notDisabled)
        }
        text="next"
        disabled={props.length <= props.current + 1}
      />
    </div>
  )
}
