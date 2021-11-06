import { defineComponent, computed } from 'vue'
import { EType } from './typing'
import './style/style.scss'
export default defineComponent({
  name: 'SButton',
  props: {
    type: {
      type: String,
      default: EType.primary,
      validator(type: any) {
        console.log()
        if (!EType[type]) {
          throw new Error(
            `按钮组件类型只能为${EType.default},${EType.error},${EType.info},${EType.primary},${EType.success},${EType.warning}`,
          )
        }
        return true
      },
    },
  },
  setup(props: any, { slots }) {
    const className = computed(() => ['s-button', `s-button-${props.type}`])
    return {
      className,
      slots,
    }
  },
  render(props: any) {
    const { className, slots } = props
    return (
      <>
        <button class={className}>
          <span>{slots.default()}</span>
        </button>
      </>
    )
  },
})
