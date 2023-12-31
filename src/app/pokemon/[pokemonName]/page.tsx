import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { RootContainer } from '@/features/pokemon/[pokemon]/components/Container/RootContainer'
import { authOption } from '@/infrastructure/nextAuthOptions'

type PokemonProps = { params: { pokemonName: string } }

export default async function PokemonPage({ params }: PokemonProps) {

  // const session = await getServerSession(authOption)
  // if (!session) {
  //   redirect('/auth/login')
  // }

  return (
    <RootContainer params={ { pokemonName: params.pokemonName }}/>
  )
}