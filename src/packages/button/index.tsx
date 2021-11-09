import { defineComponent, computed, ref } from 'vue'
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
      default: EType.default,
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
    const spread = ref('n-base-wave')
    const onMouseup = (type: any) => {
      console.log(type)
      const spreadActive = ` button-wave-spread-${type}`
      spread.value += spreadActive
      setTimeout(() => {
        spread.value = 'n-base-wave'
      }, 600)
    }
    return {
      className,
      spread,
      slots,
      onMouseup,
    }
  },
  render(props: any) {
    const { className, slots, iconPlacement, onMouseup, spread, type } = props
    const renderContent =
      iconPlacement === EIconPlacement.left ? (
        <>
          <span class="s-button__icon">{slots.icon && slots.icon()}</span>
          <span class="s-button__content">{slots.default && slots.default()}</span>
          <div aria-hidden="true" class={spread}></div>
        </>
      ) : (
        <>
          <div aria-hidden="true" class={spread}></div>
          <span class="s-button__content">{slots.default && slots.default()}</span>
          <span class="s-button__icon">{slots.icon && slots.icon()}</span>
        </>
      )
    return (
      <button class={className} onMouseup={() => onMouseup(type)}>
        {renderContent}
      </button>
    )
  },
})
