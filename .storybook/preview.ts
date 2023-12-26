import type { Preview } from '@storybook/react'
import '../src/app/globals.css'
import { initialize, mswLoader, mswDecorator } from 'msw-storybook-addon';

initialize()
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // 全体的にmswが必要であればここで設定する
    // msw: {
    //   handlers: [...pokemonHandlers]
    // }
  },
  decorators:[ mswDecorator ],
  loaders: [ mswLoader ]
}

export default preview
