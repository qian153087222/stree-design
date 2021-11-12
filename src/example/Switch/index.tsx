import { defineComponent, reactive, ref } from 'vue'
import NSwitch from '../../packages/Switch'

interface Data {
    value: boolean;
    changeValue: (a: boolean) => void
}
export default defineComponent({
    name: 'Switch',
    setup() {
        let value = ref(true)
        const changeValue = (a: boolean) => {
            value.value=a
        }
        return {
            value,
            changeValue
        }
    },
    render(props: Data) {
        const { changeValue } = props
        return (
            <>
                <div class="block">
                    <span class="h2">开关基础用法</span>
                    <div style={{ marginTop: '10px' }} class="block-flex">
                        <NSwitch onChange={(Svalue: boolean) => {
                            changeValue(Svalue)
                        }} value={this.value} size='large'  />
                    </div>
                    <div style={{ marginTop: '10px' }} class="block-flex">
                        <NSwitch onChange={(Svalue: boolean) => {
                            changeValue(Svalue)
                        }} value={this.value}  />
                    </div>
                    <div style={{ marginTop: '10px' }} class="block-flex">
                        <NSwitch onChange={(Svalue: boolean) => {
                            changeValue(Svalue)
                        }} value={this.value} size='small' />
                    </div>
                </div>
            </>
        )
    }
})