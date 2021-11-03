import { defineComponent } from 'vue';
import './style/main.scss'
import Icon from './example/Icon/index'
import AtPagination from './example/AtPagination/index'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <Icon></Icon>
        <AtPagination />
      </>
    );
  }
});