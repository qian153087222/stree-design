import Theme from 'vitepress/dist/client/theme-default'
import SButton from '../../../src/packages/button/index'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('s-button', SButton);
    app.component("demo", Demo);
    app.component('demo-block', DemoBlock);
  },
}
