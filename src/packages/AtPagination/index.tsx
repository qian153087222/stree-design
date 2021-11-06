import { defineComponent, nextTick } from "vue";
import './index.scss'
interface Props {
    onChange: (a: number | string) => void,
    total: number | string,
    pageSize: number | string,
    current: number | string,
}
export default defineComponent({

    name: 'AtPagination',
    props: {
        total: {
            type: [Number, String],
            default: 1
        },
        pageSize: {
            type: [Number, String],
            default: 1
        },
        current: {
            type: [Number, String],
            default: 1
        },
        onChange: {
            type: Function,
            default: () => { }
        }
    },
    // 目前缺少
    // 1.上一页下一页文字ICON自定义
    // 2.文字大小自定义
    render(props: Props) {
        const { total = 10, pageSize = 1, current = 1, onChange } = props
        return (
            <>
                <div class='AtPagination'>
                    <div class={`left_btn ${(Number(current) <= 1)?'disabled':''}`} onClick={() => {
                        if (Number(current) <= 1) { return false }
                        onChange(Number(current) - 1)
                    }} >上一个</div>
                    <div class='content'>{current}/{Number(total) / Number(pageSize)}</div>
                    <div onClick={() => {
                        if (Number(current) >= Math.floor(Number(total) / Number(pageSize))) { return false }
                        onChange(Number(current) + 1)
                    }} class={`right_btn ${(Number(current) >= Math.floor(Number(total) / Number(pageSize)))?'disabled':''}`}>下一个</div>
                </div>
            </>
        )
    }
})
