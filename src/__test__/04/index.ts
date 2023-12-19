import { getMyProfile } from '@/__test__/04/fetcher'

export type Profile = {
  id: string
  name?: string
  age: number
  email: string
}


export const getGreet = async () => {
  const data = await getMyProfile()
  if(!data.name) {
    return 'Hello user'
  }

  return `Hello ${data.name}`
}

export const greet = (name: string) => {
  return `Hello ${name}`
}

export const sayGoodBye = (name: string) => {
  throw new Error('未実装')
}