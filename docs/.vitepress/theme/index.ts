import Theme from 'vitepress/dist/client/theme-default'
import SButton from '../../../src/packages/button/index'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('s-button', SButton)
  },
}
