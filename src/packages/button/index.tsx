import { defineComponent, computed, ref, SetupContext } from 'vue'
import { EIconPlacement, EType,ESize } from './typing'
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
    size:{
      type:String,
      default:ESize.large,
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
    dashed:{
      type: Boolean,
      default:false
    }
  },
  setup(props:any, ctx:SetupContext<Record<string, any>>) {

    const className = ref(['s-button', `s-button-${props.type}`,`s-button-${props.size}-padding`,`s-button-${props.size}-font-size`,`s-button-${props.size}-height`])
    const spread = ref('n-base-wave')
    const border = ref(`s-button-${props.type}__content`)
    const content = ref(`s-button__content`)
    if(props.dashed){
      const borderDashed = ` s-button-${props.type}-border--dashed `
      const contentDashed = ` s-button-${props.type}--dashed `
      border.value += borderDashed;
      content.value += contentDashed;
    }
    const onClick = (type: string) => {
      const spreadActive = ` button-wave-spread-${type}`
      if(spread.value.indexOf('button-wave-spread')>-1){
        spread.value = 'n-base-wave'
      }
      setTimeout(() => {
        spread.value += spreadActive
      }, 0);
       
      
    }
    const onMousedown = (type:string) => {
      className.value.push(`s-button-${props.type}--dashed`)
    }

    const slots = ctx.slots;
    return {
      className,
      border,
      spread,
      slots,
      onMousedown,
      onClick,
      content,
    }
  },
  render(props: any) {
    const { className, slots, iconPlacement, onClick,onMousedown, spread, type,border,content } = props
    const renderContent =
      iconPlacement === EIconPlacement.left ? (
        <>
          {slots.icon && <span class="s-button__icon">{slots.icon()}</span>}
          <span class={content}>{slots.default && slots.default()}</span>
          {/*控制动画*/}
          <div aria-hidden="true" class={spread}></div>
          { /*边框*/}
          <div aria-hidden="true" class={border}></div>
        </>
      ) : (
        <>
          <div aria-hidden="true" class={spread}></div>
          <div aria-hidden="true" class={border}></div>
          <span class="s-button__content">{slots.default && slots.default()}</span>
          {slots.icon && <span class="s-button__icon">{slots.icon()}</span>}
        </>
      )
    return (
      <button class={className} onClick={() => onClick(type)} onMousedown={() => onMousedown(type)}>
        {renderContent}
      </button>
    )
  },
})
