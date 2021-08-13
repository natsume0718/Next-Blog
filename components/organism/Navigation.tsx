import { NamedAvatar, NamedAvatarProps } from '../molecule/NamedAvatar'
import { CreatedPosts, CreatedPostsProps } from '../atoms/CreatedPosts'
import { Card } from '../atoms/Card'
import { Brand } from '../atoms/Brand'
import { config } from '../../config'

export type Author = NamedAvatarProps & CreatedPostsProps

export interface AuthorProps {
  authors: Author[]
}

export function AuthorPosts() {
  return (
    <nav className="px-6 py-4 bg-white shadow">
      <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <Brand brand={config.siteTitle}></Brand>
          </div>
          <div></div>
        </div>
        <div className="flex-col hidden md:flex md:flex-row md:-mx-4">
          <a href="#" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">
            Home
          </a>
          <a href="#" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">
            Blog
          </a>
          <a href="#" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">
            About us
          </a>
        </div>
      </div>
    </nav>
  )
}
