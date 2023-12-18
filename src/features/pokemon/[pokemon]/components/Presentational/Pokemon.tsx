import { Primitive } from '@radix-ui/react-primitive'
import { useEffect, useRef } from 'react'

type PokemonProps = { data: any }
export const Pokemon = ({ data }: PokemonProps) => {
  const ref = useRef<HTMLButtonElement>(null)

  
  return (
    <div>
      { data && <div>{data.id}  </div> }
      
      <Primitive.button ref={ref} asChild aria-expanded={true}>
        <div><a>hoge</a></div>
      </Primitive.button>

    </div>
  )
}