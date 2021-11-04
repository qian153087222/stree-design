import { defineComponent, reactive, ref } from 'vue'
import AtPagination from '../../src/AtPagination'
import './index.scss';

interface Person {
    current: number | string;
    total: number | string;
    pageSize: number | string ;
}
export default defineComponent({
    name: 'AtPagination',
    setup() {
        let data:Person = reactive({
            current: 1,
            total: 10,
            pageSize: 1
        })
        return {
            data
        }
    },
    render() {
        return (
            <div class="block">
                <span class="h2">分页器基础用法</span>
                <div class="block-flex">
                    <AtPagination total={this.data.total} pageSize={this.data.pageSize} current={this.data.current} onChange={(a: number) => {
                        console.log(a)
                        this.data.current=a
                    }} />
                </div>
            </div>
        )
    }
})