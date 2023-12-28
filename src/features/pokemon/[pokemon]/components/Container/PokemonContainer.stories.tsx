import { Meta, StoryObj } from '@storybook/react'
import { pokemonHandlers } from '@/domain/pokemon/__mock__/handlers'
import { PokemonContainer } from '@/features/pokemon/[pokemon]/components/Container/PokemonContainer'
import { QueryClientProviderDecorator } from '@/test/storybook'

const meta = {
  title: 'fetures/PokemonContainer',
  component: PokemonContainer,
  tags: ['autodocs'],
  decorators: [QueryClientProviderDecorator],
  parameters: {
    msw: {
      handlers: [...pokemonHandlers]
    }
  }
} satisfies Meta<typeof PokemonContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    params: {
      pokemonName: 'pickachu'
    }
  },
  render: (args) => {
    return (<PokemonContainer params={{ pokemonName: 'pickachu' }} />)
  }
}

