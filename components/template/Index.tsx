import { Select, SelectProps } from '../atoms/Select'
import { AuthorPosts, AuthorProps } from '../organism/AuthorPosts'
import { Categories, CategoriesProps } from '../organism/Categories'
import { Navigation } from '../organism/Navigation'
import { Pagination, PaginationProps } from '../organism/Pagination'
import { Post, PostProps } from '../organism/Post'

interface IndexProps {
  posts: PostProps[]
  selects: SelectProps
  categories: CategoriesProps
  pagination: PaginationProps
  authorPosts: AuthorProps
}

export function Index(props: IndexProps) {
  return (
    <div className="bg-gray-200">
      <div className="overflow-x-hidden bg-gray-100">
        <Navigation />
        <div className="px-6 py-8">
          <div className="container flex justify-between mx-auto">
            <div className="w-full lg:w-8/12">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
                <div>
                  <Select options={props.selects.options} name={props.selects.name} />
                </div>
              </div>
              <div className="mt-6">
                {props.posts.map((post, index) => {
                  return (
                    <div className="mt-6" key={index}>
                      <Post
                        tagName={post.tagName}
                        title={post.title}
                        date={post.date}
                        authorName={post.authorName}
                        authorSrc={post.authorSrc}
                        description={post.description}
                      />
                    </div>
                  )
                })}
              </div>
              <div className="mt-8">
                <Pagination
                  length={props.pagination.length}
                  current={props.pagination.current}
                  to={props.pagination.to}
                />
              </div>
            </div>
            <div className="hidden w-4/12 -mx-8 lg:block">
              <div className="px-8">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
                <AuthorPosts
                  authors={props.authorPosts.authors}
                  className="flex flex-col max-w-sm mx-auto"
                />
              </div>
              <div className="px-8 mt-10">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
                <Categories
                  categories={props.categories.categories}
                  className="flex flex-col max-w-sm mx-auto"
                />
              </div>
              <div className="px-8 mt-10">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
                <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-center">
                    <a
                      href="#"
                      className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      Laravel
                    </a>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="text-lg font-medium text-gray-700 hover:underline">
                      Build Your New Idea with Laravel Freamwork.
                    </a>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center"></div>
                    <span className="text-sm font-light text-gray-600">Jun 1, 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
