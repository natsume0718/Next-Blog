import { Card } from '../atoms/Card'
import { UnderLineText } from '../atoms/UnderLineText'

export interface CategoriesProps {
  categories: string[]
  className?: string
}

export function Categories({ categories, className }: CategoriesProps) {
  return (
    <Card className={className}>
      <ul className="flex flex-col items-start justify-center">
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className={`inline-flex list-none justify-center font-bold items-center ${
                index !== 0 ? 'mt-6' : 'mt-6'
              }`}
            >
              - <UnderLineText text={category} />
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
