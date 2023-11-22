import { ErrorComponent } from '@/components/Layout/Error/Error'

export default function Custom404() {
  return (
    <ErrorComponent  statusCode={404} />
  )
}