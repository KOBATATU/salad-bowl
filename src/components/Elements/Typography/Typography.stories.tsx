import {Meta, StoryObj} from "@storybook/react";
import {Typography} from "@/components/Elements";

const meta = {
  title: 'Elements/Typography',
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'paragraph'
  },
  render: (args) => {
    return <Typography {...args}>HOGE</Typography>
  }
}

export const TypographyFontSize: Story = {
  render: () => {
    return (
      <div>
        <Typography variant={'h1'}>HOGE</Typography>
        <Typography variant={'h2'}>HOGE</Typography>
        <Typography variant={'h3'}>HOGE</Typography>
        <Typography variant={'h4'}>HOGE</Typography>
        <Typography variant={'h5'}>HOGE</Typography>
        <Typography variant={'h6'}>HOGE</Typography>
        <Typography variant={'paragraph'}>HOGE</Typography>
        <Typography variant={'span'}>HOGE</Typography>
      </div>
    )
  }
}