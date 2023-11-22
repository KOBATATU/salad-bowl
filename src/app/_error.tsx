import { ErrorComponent } from '@/components/Layout/Error/Error'

export default function CustomError() {
  return (
    <ErrorComponent  statusCode={500} />
  )
}