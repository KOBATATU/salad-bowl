import Axios from 'axios'
import { ErrorComponent } from '@/components/Layout/Error/Error'

type ErrorFallbackProps = {
  error: Error
}

export const ErrorFallback = ({ error }: ErrorFallbackProps) => {

  if (Axios.isAxiosError(error)) {
    return <ErrorComponent statusCode={error.response?.status}/>
  } else {
    return <ErrorComponent  statusCode={undefined} />
  }
}