import { defineComponent } from "vue";
import './style.scss'
export default defineComponent({
    name: 'SEllipsis',
    props: {
        expandTrigger: {
            type: Function,
            default: undefined
        },
        lineClamp: {
            type: [Number, String],
            default: undefined
        },
        tooltip: {
            type: Boolean,
            default: true
        }
    },
    setup() {

    },
    render(props: any) {
        const { $slots } = this;
        const { $attrs } = props;
        console.log($slots);
        return (
            <>
                <span class="s-ellipsis" style={$attrs.style}>
                    {$slots.default&&$slots.default()}
                    {$slots.tooltip&&$slots.tooltip()}
                </span>
            </>
        )
    }

})