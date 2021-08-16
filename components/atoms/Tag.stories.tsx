import { Story, Meta } from '@storybook/react'
import { Tag } from './Tag'

export default {
  title: 'atoms/Tag',
  component: Tag,
} as Meta

export const DefaultTag: Story = () => <Tag text="Laravel" />
const s = (e: Event) => {
  const dom = e.target as HTMLButtonElement
  alert(dom.textContent)
}
export const EventTag: Story = () => <Tag text="Laravel" handleClick={s} />
