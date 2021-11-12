/*
 * @Author: your name
 * @Date: 2021-11-12 14:58:12
 * @LastEditTime: 2021-11-12 15:01:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /stree-design/stree-design/src/packages/carousel/index.tsx
 */

import { defineComponent } from 'vue'
import './style.scss'
export default defineComponent({
    name: 'Scarousel',
    props: {
        expandTrigger: {
            type: Function,
            default: undefined,
        },
        lineClamp: {
            type: [Number, String],
            default: undefined,
        },
        tooltip: {
            type: Boolean,
            default: true,
        },
    },
    
});