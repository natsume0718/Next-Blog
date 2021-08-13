import React from 'react'
import { Story, Meta } from '@storybook/react'
import { NamedAvatar } from './NamedAvatar'

export default {
  title: 'molecule/NamedAvatar',
  component: NamedAvatar,
} as Meta

export const DefaultNamedAvatar: Story = () => (
  <NamedAvatar src="/man.jpeg" circle={true} name="山田太郎" />
)
