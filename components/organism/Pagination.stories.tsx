import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Pagination } from './Pagination'

export default {
  title: 'organism/Pagination',
  component: Pagination,
} as Meta

export const DefaultPagination: Story = () => <Pagination length={5} current={2} to="#" />
export const FirstPagination: Story = () => <Pagination length={5} current={1} to="#" />
export const LastPagination: Story = () => <Pagination length={5} current={5} to="#" />
