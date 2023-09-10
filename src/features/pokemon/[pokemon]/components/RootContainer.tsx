'use client'

import { useQueryClient } from '@tanstack/react-query'
import { Button } from '@/components/Elements'
import { pokemonService } from '@/service/pokemon/pokemonService'

type RootContainerProps = { params: { pokemonName: string } }
export const RootContainer = ({ params }: RootContainerProps)=>{
  const { data, isLoading } = pokemonService.usePokemonByName(params.pokemonName)
  const queryClient = useQueryClient()

  return (
    <>
      { data && <div>{data.id}  <Button onClick={()=>  {
        queryClient.invalidateQueries({ queryKey: ['pokemon', params.pokemonName ] })
      }}>invalid</Button></div> }
    </>
  )
}