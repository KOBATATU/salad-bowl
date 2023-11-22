
type ErrorProps = {
  statusCode?: number
}

const getErrorMessage = (statusCode?: number) => {
  let errorMessage
  switch (statusCode) {
  case 404:
    errorMessage = 'ページが見つかりません'
    break
  case 500:
  default:
    errorMessage = '何らかのエラーが発生しました。もう一度お試しください'
    // TODO: sentryを入れてエラー内容を追跡したい
    break
  }
  return errorMessage
}

export const ErrorComponent= ({ statusCode }: ErrorProps) => {
  const errorMessage = getErrorMessage(statusCode)
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-500">
      <h1 className="text-5xl font-bold text-white">{statusCode}</h1>
      <p className="text-2xl text-white">{errorMessage}</p>
    </div>
  )
}