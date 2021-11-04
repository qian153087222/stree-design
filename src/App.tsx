import { defineComponent } from 'vue';
import './style/main.scss'
import AtPagination from './example/AtPagination/index'
import Icon from './example/Icon/index.vue'
import SEllipsis from './example/ellipsis/index.vue'
export default defineComponent({
  name: 'App',
  components:{
    SEllipsis
  },
  setup() {
    return () => (
      <>
        <Icon></Icon>
        <SEllipsis></SEllipsis>
        <AtPagination />
      </>
    );
  }
});