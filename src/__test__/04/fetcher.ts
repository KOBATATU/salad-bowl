import { Profile } from '@/__test__/04/index'

export const getMyProfile = async (): Promise<Profile>=> {
  const response = await fetch('http://myapi.com/my/profile')
  const data = await response.json()
  if(!response.ok) {
    throw data
  }
  return data
}
