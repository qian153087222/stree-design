import { defineComponent,PropType } from 'vue'
import {Props} from './typing'
import { IosArrowForward,IosArrowBack } from '@vicons/ionicons4'
import './index.scss'

export default defineComponent({
  name: 'AtPagination',
  props: {
    total: {
      type: [Number, String],
      default: 1,
    },
    pageSize: {
      type: [Number, String],
      default: 1,
    },
    current: {
      type: [Number, String],
      default: 1,
    },
    isIcon:{
      type:Boolean,
      default: true,
    },
    onChange: {
      type: Function as PropType<Props['onChange']> ,
      default: () => { },
    },
  },
  setup(props:Props) {
    const onPageChange = (a: string) => {
      if (a === 's') {
        if (Number(props.current) <= 1) {
          return false
        }
        props.onChange(Number(props.current) - 1)
      } else {
        if (Number(props.current) >= Math.floor(Number(props.total) / Number(props.pageSize))) {
          return false
        }
        props.onChange(Number(props.current) + 1)
      }
    }
    const isShowtop = (): string => {
      return Number(props.current) <= 1 ? 'disabled' : ''
    }
    const isShowbottom = (): string => {
      return Number(props.current) >= Math.floor(Number(props.total) / Number(props.pageSize)) ? 'disabled' : ''
    }
    const numberShow=():string=>{
       return `${props.current}/${Number(props.total) / Number(props.pageSize)}`
    }
    const iconOrText=(a:string):any=>{
      let result=null
      if(a==='top'){
        result= props.isIcon ? <IosArrowBack /> : "上一个"
      }
      if(a==='bottom'){
        result= props.isIcon?<IosArrowForward />:'下一个'
      }
      return result
    }
    return {
      onPageChange,
      isShowtop,
      isShowbottom,
      numberShow,
      iconOrText
    }
  },
  // 目前缺少
  // 1.上一页下一页文字ICON自定义
  // 2.文字大小自定义
  render() {
    return (
      <>
        <div class="AtPagination">
          <div  class={`left_btn ${this.isShowtop()}`}  onClick={() => {this.onPageChange('s')}}>{this.iconOrText('top')}</div>
          <div class="content">{this.numberShow()}</div>
          <div onClick={() => { this.onPageChange('x') }}  class={`right_btn ${this.isShowbottom()}`} >{this.iconOrText('bottom')}</div>
        </div>
      </>
    )
  },
})
