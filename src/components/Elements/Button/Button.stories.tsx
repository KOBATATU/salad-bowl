import {Button} from "@/components/Elements";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
  },
  render: (args) => {
    return <Button {...args}>HOGE</Button>
  }
}

export const Diabled: Story = {
  render: (args) => {
    return <Button disabled {...args}>HOGE</Button>
  }
}