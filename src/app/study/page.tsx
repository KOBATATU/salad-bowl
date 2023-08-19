import { Button}  from '@/components/Elements'
import {Typography} from "@/components/Elements/Typography/Typography";
export default function HomeButton() {
  return (
    <main className="flex  p-24">
      <Button size={'md'} variant={'outlined'} color={'secondary'}>これはsm</Button>
      <Typography variant={'span'}>hoge</Typography>
    </main>
  )
}