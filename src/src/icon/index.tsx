import { computed, defineComponent, onBeforeMount, onMounted, ref, VNode, nextTick } from "vue";
import { Icon } from '@vicons/utils'
export default defineComponent({
    name: 'SIcon',
    props: {
        // 图标颜色
        color: {
            type: String,
            default: undefined
        },
        // 图标深度
        depth: {
            type: [Number, String],
            default: undefined
        },
        // 图标大小
        size: {
            type: [Number, String],
            default: undefined
        }

    },
    setup() {

    },
    render(props: any) {
        const { $slots } = this;
        const { color = 'black', depth = '5', size = '40' } = props;
        const slots = {
            svg: (e: any[]) => {
                let renderIcon: any = null;
                if (e.length > 1) {
                    return;
                }
                const arry: String[] = ['', '0.1', '0.3', '0.5', '0.7', '1']
                // 判断是否是组件

                if ((typeof e[0].type === 'object' && e[0].type !== null) || typeof e[0].type?.render === 'function') {
                    nextTick(() => {
                        e[0].el.style.opacity = arry[depth]
                        e[0].el.style.fill = color;
                        e[0].el.style.width = size + 'px';
                    })
                    renderIcon = (e)
                } else {
                    e[0].props.opacity = arry[depth]
                    e[0].props.fill = color;
                    e[0].props.width = size;
                    renderIcon = (e);
                }
                return renderIcon;

            }
        };

        return (
            <>
                {
                    $slots.default && slots.svg($slots.default())

                }
            </>
        )
    }
})