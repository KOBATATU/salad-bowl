import { ReactNode, Suspense } from 'react'
import { Spinner } from '@/components/Elements'

type SuspenseProps = {
  children: ReactNode
}

export const SuspenseLoading = ({ children }: SuspenseProps) =>{
  return (
    <Suspense fallback={
      <div className={'h-full w-full items-center justify-center'}>
        <Spinner />
      </div>}>
      {children}
    </Suspense>
  )
}