import type { Preview } from '@storybook/react'
import '../src/app/globals.css'
import { initialize, mswLoader, mswDecorator } from 'msw-storybook-addon';
import {RouterContext} from "next/dist/shared/lib/router-context";

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
    // 現状のnext routerのpathを定義する設定(設定はstory単位で設定する)
    // nextRouter: {
    //   pathname: '/my/pathname'
    // }
  },
  decorators:[ mswDecorator ],
  loaders: [ mswLoader ],
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export default preview
