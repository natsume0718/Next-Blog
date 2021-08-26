import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Post } from './Post'

const author = {
  name: '山田太郎',
  src: 'man.jpeg',
}

export default {
  title: 'organism/Post',
  component: Post,
} as Meta

export const DefaultPost: Story = () => (
  <Post
    authorName={author.name}
    authorSrc={author.src}
    date="2021-02-01"
    title="Laravel入門"
    description="Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things."
  />
)
