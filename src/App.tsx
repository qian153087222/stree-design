import { defineComponent } from 'vue'
import AtPagination from './example/AtPagination/index'
import Icon from './example/Icon/index.vue'
import SEllipsis from './example/ellipsis/index.vue'
import SButton from './example/button/index.vue'
import Switch from './example/Switch/index'

import Scarousel from './example/carousel/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    AtPagination,
    SEllipsis,
    Icon,
    Scarousel
  },
  setup() {
    return () => (
      <>
        <Icon></Icon>
        <SEllipsis></SEllipsis>
        <AtPagination />
        <SButton />
        <Switch />
        <Scarousel/>
      </>
    )
  },
})
