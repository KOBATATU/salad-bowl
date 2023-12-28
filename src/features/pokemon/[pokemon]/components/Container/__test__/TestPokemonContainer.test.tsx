import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { pokemonHandlers } from '@/domain/pokemon/__mock__/handlers'
import { PokemonContainer } from '@/features/pokemon/[pokemon]/components/Container/PokemonContainer'
import { setupMockServer } from '@/test/jest'
import { TestQueryClientProvider } from '@/test/provider'

setupMockServer(...pokemonHandlers)

const setup = async ()=>{
  render(<TestQueryClientProvider>
    <PokemonContainer params={{ pokemonName: 'pickachu' }} />
  </TestQueryClientProvider>)
  
}

describe('レンダリングテスト', () => {
  test('APIをhook経由で呼び出せるか', async () =>{
    //given
    await setup()

    expect(await screen.findByText('25')).toBeInTheDocument()
  })
})