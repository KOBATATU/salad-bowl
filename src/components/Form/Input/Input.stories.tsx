import { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/Form/Input/Input'

const meta = {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    //input単体であるとa11yの表記が必要であるのを無視している
    a11y: {
      config: {
        rules: [{
          id: 'label', enabled: false
        }]
      }
    }
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <Input {...args} />
  }
}

export const Error: Story = {
  args: {
    isError: true
  },
  render: (args) => {
    return <Input {...args} />
  }
}

export const InputList: Story = {
  render: (args) => {
    return (
      <div className={'flex flex-col'}>
        <div className={'mb-3 w-full'}><Input /></div>
        <div className={'mb-3 w-1/2'}><Input /></div>
        <div className={'w-1/4'}><Input /></div>
      </div>
    )
  }
}