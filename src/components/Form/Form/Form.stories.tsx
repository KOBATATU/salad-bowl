import { Meta, StoryObj } from '@storybook/react'
import { MdOutlineInfo } from 'react-icons/md'
import { z } from 'zod'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@/components/Elements'
import { Form, FormWrapper, Input } from '@/components/Form'
import { Alert } from '@/components/Notifications'

const meta = {
  title: 'Form/Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>


const loginRequest = z.object({
  email: z.string().email('メールアドレスの形式で入力してください'),
  password: z
    .string()
    .min(8, { message: '8桁以上のパスワードを入力してください' })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: '英大文字、英小文字、数字で入力してください',
    })
})

type LoginType = z.infer<typeof loginRequest>

export const Login: Story = {
  args:{
    onSubmit: ()=> console.log(),
    children: ()=><div></div>
  },
  render: (args) => {
    return (
      <Form<LoginType> schema={loginRequest} onSubmit={(data)=> console.log(data)} >
        {({ register, formState } ) => {
          return (
            <Card className={'mx-auto w-full md:w-1/2'}>
              <CardHeader><Typography variant={'h5'} className={'text-center'}>welcome!</Typography></CardHeader>
              <CardBody>
                <FormWrapper label={'メール'} required={true} errorMessage={formState.errors.email?.message}>
                  <Input type={'email'} registration={register('email')} isError={!!formState.errors.email} />
                </FormWrapper>
                <FormWrapper label={'パスワード'} required={true} errorMessage={formState.errors.password?.message}>
                  <Input type={'password'} registration={register('password')} isError={!!formState.errors.password} />
                </FormWrapper>
                <div className={'w-full text-right'}>
                  <Typography variant={'span'} color={'blue'}><a>パスワードを忘れた場合はこちら</a></Typography>
                </div>
              </CardBody>
              <CardFooter>
                <Button>ログイン</Button>
              </CardFooter>
            </Card>
          )
        }}
      </Form>
    )
  }
}

export const Register: Story = {
  args:{
    onSubmit: ()=> console.log(),
    children: ()=><div></div>
  },
  render: (args) => {
    return (
      <Form<LoginType> onSubmit={(data)=> console.log(data)}>
        {({ register } ) => {
          return (
            <Card  className={'mx-auto w-full md:w-1/2'}>
              <CardHeader><Typography variant={'h5'} className={'text-center'}>welcome!</Typography></CardHeader>
              <CardBody>
                <Alert  variant={'outlined'} color={'warning'} prefetchIcon={ <MdOutlineInfo className="h-6 w-6" />}>
                  <Typography variant={'h6'}>
                    注意事項
                  </Typography>
                  <ul className="mt-2 list-inside list-disc text-sm text-black">
                    <li>パスワードは少なくとも8文字以上入力してください</li>
                    <li>パスワードには複数の記号を交えてください, e.g., ! @ # ?</li>
                  </ul>
                </Alert>
                <FormWrapper className={'py-2'} label={'メール'} required={true} errorMessage={'メールではありません'}>
                  <Input type={'email'} registration={register('email')} isError={true} />
                </FormWrapper>
                <FormWrapper label={'パスワード'} required={true}>
                  <Input type={'password'} registration={register('password')} />
                </FormWrapper>
                <div className={'w-full text-right'}>
                  <Typography variant={'span'} color={'blue'}><a>パスワードを忘れた場合はこちら</a></Typography>
                </div>
              </CardBody>
              <CardFooter>
                <Button>ログイン</Button>
              </CardFooter>
            </Card>
          )
        }}
      </Form>
    )
  }
}