import { Brand } from '../atoms/Brand'
import { config } from '../../config'
import { Folding } from '../atoms/Folding'

export function Navigation() {
  return (
    <nav className="px-6 py-4 bg-white shadow">
      <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <Brand brand={config.siteTitle}></Brand>
          </div>
          <Folding className="md:hidden" />
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
