import { Args, PartialStoryFn } from '@storybook/csf'
import type { ReactRenderer } from '@storybook/react'
import { TestQueryClientProvider } from '@/test/provider'

// storybookにてuseQueryを使う場合はDecoratorを使う
export const QueryClientProviderDecorator = (
  Story: PartialStoryFn<ReactRenderer, Args>
) => (
  <TestQueryClientProvider>
    <Story />
  </TestQueryClientProvider>
)
export const PCStory = {
  parameters: {
    screenshot: {
      viewport: {
        width: 1280,
        height: 800,
      },
      fullPage: false,
    },
  },
}