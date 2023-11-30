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
  if (error instanceof ResponseError) {
    return <ErrorComponent  statusCode={error.getStatusCode} />
  } else {
    return <ErrorComponent />

  }
}