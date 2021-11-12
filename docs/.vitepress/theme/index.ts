/*
 * @Author: your name
 * @Date: 2021-11-12 14:41:14
 * @LastEditTime: 2021-11-12 16:11:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /stree-design/stree-design/docs/.vitepress/theme/index.ts
 */
import Theme from 'vitepress/dist/client/theme-default'
import SButton from '../../../src/packages/button/index'
import SIcon from '../../../src/packages/icon/index'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import { IosAmericanFootball } from '@vicons/ionicons4'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('s-button', SButton);
    app.component('s-icon', SIcon);
    app.component('s-ios-american-football', IosAmericanFootball);
    app.component("demo", Demo);
    app.component('demo-block', DemoBlock);
  },
}
