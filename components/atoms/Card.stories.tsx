import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Card } from './Card'

export default {
  title: 'atoms/Card',
  component: Card,
} as Meta

export const DefautlCard: Story = () => {
  return (
    <Card>
      <div className="w-28 h-28"></div>
    </Card>
  )
}
