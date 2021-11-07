import { defineComponent, computed } from 'vue'
import { EIconPlacement, EType } from './typing'
import './style/style.scss'
export default defineComponent({
  name: 'SButton',
  props: {
    iconPlacement: {
      type: String,
      default: EIconPlacement.left,
      validator(type: any) {
        if (!EIconPlacement[type]) {
          throw new Error(`icon-placement值只能为${EIconPlacement.left},${EIconPlacement.right},你当前的值是${type}`)
        }
        return true
      },
    },
    type: {
      type: String,
      default: EType.primary,
      validator(type: any) {
        if (!EType[type]) {
          throw new Error(
            `按钮组件类型只能为${EType.default},${EType.error},${EType.info},${EType.primary},${EType.success},${EType.warning},你当前的值是${type}`,
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
    const { className, slots, iconPlacement } = props
    const renderContent =
      iconPlacement === EIconPlacement.left ? (
        <>
          <span class="s-button__icon">{slots.icon && slots.icon()}</span>
          <span class="s-button__content">{slots.default && slots.default()}</span>
        </>
      ) : (
        <>
          <span class="s-button__content">{slots.default && slots.default()}</span>
          <span class="s-button__icon">{slots.icon && slots.icon()}</span>
        </>
      )
    return <button class={className}>{renderContent}</button>
  },
})
