import React from 'react'
import { Story, Meta } from '@storybook/react'
import { AuthorPosts } from './AuthorPosts'

export default {
  title: 'organism/AuthorPosts',
  component: AuthorPosts,
} as Meta

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

const authors = [
  { name: '太郎1', src: '/man.jpeg', counts: getRandomInt(30) },
  { name: '太郎2', src: '/man.jpeg', counts: getRandomInt(30) },
  { name: '太郎3', src: '/man.jpeg', counts: getRandomInt(30) },
  { name: '太郎4', src: '/man.jpeg', counts: getRandomInt(30) },
]

export const DefaultAuthorPosts: Story = () => <AuthorPosts authors={authors}></AuthorPosts>
