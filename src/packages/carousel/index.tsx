/*
 * @Author: your name
 * @Date: 2021-11-12 14:58:12
 * @LastEditTime: 2021-11-12 18:01:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /stree-design/stree-design/src/packages/carousel/index.tsx
 */

import { defineComponent, onMounted, reactive, toRefs } from 'vue'
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
    setup() {
        const state = reactive({
            list: ['https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg', 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg', 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg']
        });

        let swiperTime = null;

        const swiperList = (el: HTMLElement) => {
            const list = state.list;
            var len = state.list.length;
            if (len > 1) { // 列表项大于1时，才做swiper动画。
                list.push(list[0]); // 这里是模拟，在dom元素的末尾，添加列表第一项，真实需要自己做dom操作。
                let cur = 0;
                const swpier = (delay: number) => {
                    swiperTime = setTimeout(function () {
                        cur += 1;
                        if (cur > len) {
                            // 这时表示到了最后一个复制块，直接无动画移动到真实的第一个元素
                            cur = 0;
                            el.style.transition = "none";
                            el.style.transform = "translateY(0)";
                            swpier(3000);
                        } else {
                            var top = -45 * cur;
                            el.style.transform = "translateY(" + top + "px)";
                            el.style.transition = "all 1s";
                            cur === len ? swpier(3000) : swpier(4000); // 如果是最后一个复制块，间隔时间需要修改，加上最上面的替换块，合计2s。
                        }
                    }, delay)
                }
                swpier(4000);
            }
        }
        onMounted(() => {
            // 获取当前滚动元素
            const el: HTMLElement = document.getElementById("s-swiperWrap") as HTMLElement;
            swiperList(el);

        });
        return { ...toRefs(state) };
    },
    render(props: any) {
        console.log(props)
        const { list } = props;
        return <div class='s-swipe-wrap'>
            <div class="s-swipe-container" id="s-swiperWrap">
                {list.map((images:String)=><img src={images} />) }
            </div>
        </div>
    },
});