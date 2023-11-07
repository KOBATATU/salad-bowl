
type PokemonProps = { data: any }
export const Pokemon = ({ data }: PokemonProps) => {
  return (
    <div>
      { data && <div>{data.id}  </div> }
    </div>
  )
}