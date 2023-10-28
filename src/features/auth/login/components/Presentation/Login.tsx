'use client'
import { signIn } from 'next-auth/react'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@/components/Elements'

export const Login = () => {
  return (
    <div className={'flex items-center justify-center'} style={{ height: '80vh' }}>
      <Card className={''}>
        <CardHeader className={'text-center'}>
          <Typography variant={'h4'}>ログイン</Typography>
          <Typography variant={'span'} className={'mt-5 block'}>ログインをして早速サイトを使ってみましょう！</Typography>
        </CardHeader>
        <CardBody className={'flex items-center justify-center'}>
          <Button color={'primary'} variant={'outlined'} className={'flex items-center justify-center gap-2'} onClick={()=> signIn('github')}>
            <img className="h-6 w-6" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" loading="lazy" alt="google logo" />
            <span>Login with github</span>
          </Button>
        </CardBody>
        <CardFooter className={'text-center'}>
          <Typography variant='span' className='block'>利用規約、プライバシーに同意した上でログインしてください。</Typography>
        </CardFooter>
      </Card>
    </div>
  )
}