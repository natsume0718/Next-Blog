export interface Option {
  value?: number | string
  text: string
}
export interface SelectProps {
  options: Option[]
  name: string
}

export function Select({ options, name }: SelectProps) {
  return (
    <select
      name={name}
      className="p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        )
      })}
    </select>
  )
}
