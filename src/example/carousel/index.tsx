/*
 * @Author: your name
 * @Date: 2021-11-12 15:06:44
 * @LastEditTime: 2021-11-12 15:09:55
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /stree-design/stree-design/src/example/carousel/index.tsx
 */
import { defineComponent } from 'vue'
import Scarousel from '../../packages/carousel'

export default defineComponent({
    name: 'Carousel',
    render() {
        return (
            <div class="block">
                <span class="h2">基础用法</span>
                <div class="block-flex">
                    <Scarousel></Scarousel>
                </div>
            </div>
        )
    },
})
