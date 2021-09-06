import React from 'react'
import { Story, Meta } from '@storybook/react'
import { UnderLineText } from './UnderLineText'

export default {
  title: 'atoms/UnderLineText',
  component: UnderLineText,
} as Meta

export const DefaultUnderLine: Story = () => (
  <UnderLineText text="こんにちは" className={`text-gray-700`} />
)
export const DefaultUnderLineBold: Story = () => (
  <UnderLineText text="こんにちは" className={`text-gray-700 font-bold`} />
)
