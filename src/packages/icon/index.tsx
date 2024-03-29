import { defineComponent, nextTick, VNode } from 'vue'
export default defineComponent({
  name: 'SIcon',
  props: {
    // 图标颜色
    color: {
      type: String,
      default: undefined,
    },
    // 图标深度
    depth: {
      type: [Number, String],
      default: undefined,
    },
    // 图标大小
    size: {
      type: [Number, String],
      default: undefined,
    },
  },
  setup(props: any, { slots }) {
    /**
     * @description 判断是否是组件
     * @param value 组件
     * @returns Boolean
     */
    const isComponent = (value: any): Boolean => {
      return (typeof value.type === 'object' && value.type !== null) || typeof value.type?.render === 'function'
    }
    return {
      slots,
      isComponent,
    }
  },
  render(props: any) {
    const { color = 'black', depth = '5', size = '14', slots, isComponent } = props
    const slot: any = {
      svg: (e: Array<VNode>): Array<VNode> => {
        const json = {
          '1': '0.1',
          '2': '0.3',
          '3': '0.5',
          '4': '0.7',
          '5': '1',
        }
        const m = {
          opacity: json[depth],
          fill: color,
          width: size,
        }
        e.map((item) => {
          if (isComponent(item)) {
            nextTick(() => {
              Object.assign(item.el?.style || {}, m)
            })
          } else {
            Object.assign(item.props || {}, m)
          }
        })

        return e
      },
    }
    return <>{slots.default && slot.svg(slots.default())}</>
  },
})
