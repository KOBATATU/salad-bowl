import { QueryClient } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { QueryClientProviders } from '@/components/QueryClientProviders'
import { PokemonContainer } from '@/features/pokemon/[pokemon]/components/Container/PokemonContainer'

const queryClient = new QueryClient()
describe('レンダリングテスト', () => {
  test('APIをhook経由で呼び出せるか', () =>{
    render(<QueryClientProviders>
      <PokemonContainer params={{ pokemonName: 'pickachu' }} />
    </QueryClientProviders>)
  })
})