import React from 'react'
import { Story, Meta } from '@storybook/react'
import { CreatedPosts } from './CreatedPosts'

export default {
  title: 'atoms/CreatedPosts',
  component: CreatedPosts,
} as Meta

export const DefautlCreatedPosts: Story = () => {
  return <CreatedPosts counts={1} />
}
