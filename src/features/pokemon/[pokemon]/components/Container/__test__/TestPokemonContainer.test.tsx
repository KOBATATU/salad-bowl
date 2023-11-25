import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { screen } from '@testing-library/dom'
import { render, waitFor } from '@testing-library/react'
import { PokemonContainer } from '@/features/pokemon/[pokemon]/components/Container/PokemonContainer'

const queryClient = new QueryClient()
describe('レンダリングテスト', () => {
  test('APIをhook経由で呼び出せるか', async () =>{
    render(<QueryClientProvider client={queryClient}>
      <PokemonContainer params={{ pokemonName: 'pickachu' }} />
    </QueryClientProvider>)
    await waitFor(() => {
      expect(screen.getByText('25')).toBeInTheDocument()
    })
    screen.debug()
  })
})