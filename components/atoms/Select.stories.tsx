import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Option, Select } from './Select'

export default {
  title: 'Select',
  component: Select,
} as Meta

const options: Option[] = [
  { value: '', text: '-' },
  { value: '1', text: 'first' },
  { value: '2', text: 'second' },
]

export const Danger: Story = () => <Select options={options} name="select"></Select>
