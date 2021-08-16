import { Story, Meta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta

export const DefaultButton: Story = () => (
  <Button text="Laravel" className="text-red-100 bg-black-600" />
)
const s = (e: Event) => {
  const dom = e.target as HTMLButtonElement
  alert(dom.textContent)
}
export const EventButton: Story = () => (
  <Button text="Laravel" handleClick={s} className="text-gray-100" />
)
