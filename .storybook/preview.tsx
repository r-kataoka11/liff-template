import { Provider } from 'react-redux'
import { store } from '../src/ducks/store'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    return (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  },
]
