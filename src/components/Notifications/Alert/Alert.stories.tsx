import {Meta, StoryObj} from "@storybook/react";
import {Alert} from "@/components/Notifications";
import {MdOutlineInfo, MdWarningAmber} from "react-icons/md";
import {Typography} from "@/components/Elements";

const meta = {
  title: 'Elements/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => {
    return (
      <Alert {...args}>
        Primary Alert
      </Alert>
    )
  }
}

export const Warning: Story = {
  args: {
    color: 'warning',
    prefetchIcon: <MdWarningAmber className="h-6 w-6" />
  },
  render: (args) => {
    return (
      <Alert {...args}>
        Warning Alert
      </Alert>
    )
  }
}

export const AlertErrorList: Story = {
  args: {
    variant: 'outlined',
    color: 'error',
    prefetchIcon: <MdOutlineInfo className="h-6 w-6" />
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <Typography variant={'h5'}>
          Ensure that these requirements are met:
        </Typography>
        <ul className="ml-2 mt-2 list-inside list-disc text-black">
          <li>At least 10 characters (and up to 100 characters)</li>
          <li>At least one lowercase character</li>
          <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
        </ul>
      </Alert>
    )
  }
}