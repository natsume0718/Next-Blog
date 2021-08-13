import React from 'react'
import { Story, Meta } from '@storybook/react'
import { UnderLineText } from './UnderLineText'
import { themeColor } from '../../config'

export default {
  title: 'atoms/UnderLineText',
  component: UnderLineText,
} as Meta

export const DefaultUnderLineBold: Story = () => (
  <UnderLineText text="こんにちは" className={`text-${themeColor}-700 font-bold`} />
)
