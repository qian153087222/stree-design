import { defineComponent, PropType,reactive } from 'vue'
import { Props,Size } from './typing'
import './index.scss'

export default defineComponent({
    name: 'Switch',

    props: {
        value: {
            type: Boolean,
            default: false,
        },
        onChange: {
            type: Function as PropType<Props['onChange']>,
            default: () => {},
        },
        size:{
            type:String,
            default:Size.medium
        },
    },
    setup(props: Props) {
        const inputClick = () => {
            props.onChange(!props.value)
        }
        return {
            inputClick
        }
    },
    render(props: any) {
        const { value,inputClick,size,color } = props
        return (
            <>
                <div  onClick={inputClick} class='SwitchBox'>
                    <input onClick={inputClick}  class={`switch switch-anim ${size}`} type="checkbox" checked={value} />
                </div>
            </>
        )
    }
})