import { NamedAvatar, NamedAvatarProps } from '../molecule/NamedAvatar'
import { CreatedPosts, CreatedPostsProps } from '../atoms/CreatedPosts'
import { Card } from '../atoms/Card'
import { themeColor } from '../../config'

export type Author = NamedAvatarProps & CreatedPostsProps

export interface AuthorProps {
  authors: Author[]
}

export function AuthorPosts({ authors }: AuthorProps) {
  return (
    <Card>
      <ul className="flex flex-col items-start justify-center">
        {authors.map((author, index) => {
          return (
            <li
              key={index}
              className={`inline-flex list-none justify-center items-center ${
                index !== 0 ? 'mt-6' : 'mt-6'
              }`}
            >
              <NamedAvatar
                className={`text-${themeColor}-700 font-bold`}
                src={author.src}
                alt={author.alt}
                circle={true}
                name={author.name}
              />
              <CreatedPosts counts={author.counts} className="ml-2" />
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
