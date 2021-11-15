/*
 * @Author: your name
 * @Date: 2021-11-12 14:58:12
 * @LastEditTime: 2021-11-15 09:41:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /stree-design/stree-design/src/packages/carousel/index.tsx
 */

import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { Props } from './typing';
import './style.scss'
export default defineComponent({
    name: 'Scarousel',
    props: {
        interval: {
            type: [Number, String],
            default: 5000,
        },
        direction: {
            type: String,
            default: 'top',
        }
    },
    setup({ interval, direction }) {
        const state = reactive({
            list: ['https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg', 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg', 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg']
        });
        const swiperList = (el: HTMLElement) => {
            const list = state.list;
            var len = state.list.length;
            let swiperTime = null;
            if (len > 1) { // 列表项大于1时，才做swiper动画。
                list.push(list[0]); // 这里是模拟，在dom元素的末尾，添加列表第一项，真实需要自己做dom操作。
                let cur = 0;
                const isY = direction === 'top';//是否是y轴
                const swpier = (delay: number) => {
                    swiperTime = setTimeout(function () {
                        cur += 1;
                        if (cur > len) {
                            // 这时表示到了最后一个复制块，直接无动画移动到真实的第一个元素
                            cur = 0;
                            el.style.transition = "none";
                            el.style.transform = `translate${isY ? 'Y' : 'X'}(0)`;
                            swpier(3000);
                        } else {
                            const swper = document.querySelector(".s-swipe-wrap") as HTMLElement;
                            const swipeContainer = document.querySelector(".s-swipe-container") as HTMLElement;
                            swipeContainer.style.flexDirection = isY ? "column" : "none";
                            const client = -(isY ? swper.clientHeight : swper.clientWidth) * cur;
                            el.style.transform = `translate${isY ? 'Y' : 'X'}(${client}px)`;
                            el.style.transition = "all 1s";
                            cur === len ? swpier(Number(interval)) : swpier(Number(interval) + 1000); // 如果是最后一个复制块，间隔时间需要修改，加上最上面的替换块，合计2s。
                        }
                    }, delay)
                }
                swpier(Number(interval));
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
                {list.map((images: string) => <img src={images} />)}
            </div>
        </div>
    },
});