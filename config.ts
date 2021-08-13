import colors from 'tailwindcss/colors'

export const config = {
  siteTitle: 'NextBlog',
} as const

export const themeColor = 'gray' as keyof typeof colors
