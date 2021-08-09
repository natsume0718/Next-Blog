import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Avatar } from './Avatar'

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta

export const CircleAvatar: Story = () => <Avatar src="/man.jpeg" circle={true}></Avatar>
export const DefaultAvatar: Story = () => <Avatar src="/man.jpeg"></Avatar>
