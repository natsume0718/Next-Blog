import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Folding } from './Folding'

export default {
  title: 'atoms/Folding',
  component: Folding,
} as Meta

export const DefaultFolding: Story = () => <Folding color="gray" />
