import Image from 'next/image'
import { Button, Typography } from '@/components/base'
export default function Home() {
  return (
    <main className="p-24">
      <Button variant={'outlined'} color='green'>a</Button>
      <Typography>hoge</Typography>
    </main>
  )
}