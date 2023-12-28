import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { mockGetPokemon } from '@/domain/pokemon/__mock__/jest'
import { PokemonContainer } from '@/features/pokemon/[pokemon]/components/Container/PokemonContainer'
import { TestQueryClientProvider } from '@/test/provider'

const setup = async ()=> {
  render(<TestQueryClientProvider>
    <PokemonContainer params={{ pokemonName: 'pickachu' }}/>
  </TestQueryClientProvider>)
}
beforeEach(() =>{
  jest.resetAllMocks()
})

describe('レンダリングテスト', () => {
  test('APIをhook経由で呼び出せるか', async () =>{
    //given
    const getPokemon = mockGetPokemon()

    await setup()

    expect(await screen.findByText('25')).toBeInTheDocument()
    expect(getPokemon).toHaveBeenCalled()
    expect(getPokemon).toHaveBeenCalledWith('pickachu')
  })
})