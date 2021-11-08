import { defineComponent, reactive } from 'vue'
import AtPagination from '../../packages/AtPagination'
import './index.scss'

interface Person {
  current: number | string    // 当前第几页
  total: number | string      // 总条数
  pageSize: number | string   // 一页多少条
  isIcon:boolean              //使用icon还是文字  false 文字  true 图标
}
export default defineComponent({
  name: 'AtPagination',
  setup() {
    const data: Person = reactive({
      current: 1,
      total: 10,
      pageSize: 1,
      isIcon:false
    })
    return {
      data,
    }
  },
  render() {
    return (
      <div class="block">
        <span class="h2">分页器基础用法</span>
        <div class="block-flex">
          <AtPagination
            total={this.data.total}
            pageSize={this.data.pageSize}
            current={this.data.current}
            isIcon={false}
            onChange={(a: number | string) => {
              console.log(a)
              this.data.current = a
            }}
          />
        </div>
        <div class="block-flex">
          <AtPagination
            total={this.data.total}
            pageSize={this.data.pageSize}
            current={this.data.current}
            isIcon={true}
            onChange={(a: number | string) => {
              console.log(a)
              this.data.current = a
            }}
          />
        </div>
      </div>
    )
  },
})
