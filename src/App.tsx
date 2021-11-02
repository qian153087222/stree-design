import { defineComponent } from 'vue';
import './style/main.scss'
import Icon from './example/Icon/index'
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <Icon></Icon>
      </>
    );
  }
});