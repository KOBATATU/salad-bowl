import Axios from 'axios'
import { instanceOf } from 'prop-types'
import { ErrorComponent } from '@/components/Layout/Error/Error'

type ErrorFallbackProps = {
  error: any
}

export class ResponseError extends Error {
  private readonly statusCode
  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }

  get getStatusCode() {
    return this.statusCode
  }
}

export const ErrorFallback = ({ error }: ErrorFallbackProps) => {

  if (Axios.isAxiosError(error)) {
    return <ErrorComponent statusCode={error.response?.status}/>
  } else if (instanceOf(ResponseError)) {
    return <ErrorComponent  statusCode={error.getStatusCode} />
  }
}