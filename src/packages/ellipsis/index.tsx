import { defineComponent } from 'vue'
import './style.scss'
import { Data, Props, SetupContext } from './typing'

export default defineComponent({
  name: 'SEllipsis',
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
  setup(props: Data, { slots, attrs }: SetupContext): Data {
    console.log(props)
    return {
      slots,
      attrs,
    }
  },
  render(props: Props) {
    const { attrs, slots } = props
    return (
      <>
        <span class="s-ellipsis" style={attrs.style}>
          {slots.default && slots.default()}
          {slots.tooltip && slots.tooltip()}
        </span>
      </>
    )
  },
})
