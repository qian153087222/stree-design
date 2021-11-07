import { defineComponent } from 'vue'
import SIcon from '../../packages/icon'
import './style/icon.scss'
import './style/_common.scss'
import { IosAdd, IosAddCircle } from '@vicons/ionicons4'

export default defineComponent({
  name: 'Icon',
  render() {
    return (
      <div class="block">
        <span class="h2">基础用法</span>
        <div class="block-flex">
          <SIcon size="40" depth="3" color="red">
            <IosAdd />
            <IosAdd />
            <IosAdd />
            <IosAdd />
            <IosAdd />
          </SIcon>
          <SIcon size="20">
            <IosAddCircle />
          </SIcon>
          <SIcon size="40" color="#0e7a0d">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
            </svg>
          </SIcon>
        </div>
      </div>
    )
  },
})
