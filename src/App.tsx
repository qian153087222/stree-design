import { defineComponent } from 'vue';
import AtPagination from './example/AtPagination/index'
import Icon from './example/Icon/index.vue'
import SEllipsis from './example/ellipsis/index.vue'
import SButton from './example/button/index.vue'
export default defineComponent({
  name: 'App',
  components:{
    AtPagination,
    SEllipsis,
    Icon
  },
  setup() {
    return () => (
      <>
        <Icon></Icon>
        <SEllipsis></SEllipsis>
        <AtPagination />
        <SButton />
      </>
    );
  }
});