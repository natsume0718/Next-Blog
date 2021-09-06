import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Categories } from './Categories'

export default {
  title: 'organism/Categories',
  component: Categories,
} as Meta

const categories = ['AWS', 'PHP', 'Next', 'Laravel']

export const DefaultCategories: Story = () => <Categories categories={categories} />
