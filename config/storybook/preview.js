import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(TranslationDecorator)
addDecorator(ThemeDecorator(Theme.DARK))
addDecorator(RouterDecorator)