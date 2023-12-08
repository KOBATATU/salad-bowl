import { Meta, StoryObj } from '@storybook/react'
import { MdAdd } from 'react-icons/md'
import { Button } from '@/components/Elements'

const meta = {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <div>
      <div>Default(props変更はここのみが変更されます)</div>
      <Button {...args}>ボタン</Button>
    </div>
  }
}

export const Buttons: Story = {
  render: ()=>{
    return (
      <div>
        <span>variants colors</span>
        <div className='flex'>
          <Button variant='contained' color='primary' className='mr-2 mt-2'>ボタン</Button>
          <Button variant='text' color='primary' className='mr-2 mt-2'>ボタン</Button>
          <Button variant='outlined' color='primary' className='mt-2'>ボタン</Button>
        </div>
        <div className='flex'>
          <Button variant='contained' color='primary' className='mr-2 mt-2' disabled={true}>ボタン</Button>
          <Button variant='text' color='primary' className='mr-2 mt-2' disabled={true}>ボタン</Button>
          <Button variant='outlined' color='primary' className='mt-2' disabled={true}>ボタン</Button>
        </div>

        <span>loading</span>
        <div className='flex'>
          <Button variant='contained' color='primary' className='mr-2 mt-2' loading={true}>ボタン</Button>
          <Button variant='text' color='primary' className='mr-2 mt-2' loading={true}>ボタン</Button>
          <Button variant='outlined' color='primary' className='mt-2' loading={true}>ボタン</Button>
        </div>

        <span>size</span>
        <div className='flex'>
          <Button variant='contained' color='primary' size='sm' className='mr-2 mt-2'>ボタン</Button>
          <Button variant='contained' color='primary' size='md' className='mr-2 mt-2'>ボタン</Button>
          <Button variant='contained' color='primary' size='lg' className='mt-2'>ボタン</Button>
        </div>
        <div className='flex'>
          <Button variant='contained' color='primary' size='sm' className='mr-2 mt-2' disabled={true}>ボタン</Button>
          <Button variant='contained' color='primary' size='md' className='mr-2 mt-2' disabled={true}>ボタン</Button>
          <Button variant='contained' color='primary' size='lg' className='mt-2' disabled={true}>ボタン</Button>
        </div>

        <span>ripple effect</span>
        <div className='flex'>
          <Button variant='contained' color='primary' ripple={true}>ボタン</Button>
          <Button variant='text' color='primary' ripple={true}>ボタン</Button>
          <Button variant='outlined' color='primary' ripple={true}>ボタン</Button>
        </div>

        <span>icon</span>
        <div className='flex'>
          <Button variant='contained' color='primary' prefixIcon={<MdAdd/>}>ボタン</Button>
          <Button variant='contained' color='primary' suffixIcon={<MdAdd/>}>ボタン</Button>
          <Button variant='contained' color='primary' size='sm'><MdAdd className='text-md'/></Button>
        </div>

        <span>Extending Style</span>
        <div className='flex'>
          <Button variant='contained' color='primary' size='sm' className='mr-2 mt-2 w-96'>ボタン</Button>
        </div>
      </div>
    )
  }
}