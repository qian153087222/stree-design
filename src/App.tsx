import { defineComponent } from 'vue';
import './style/main.scss'
import Input from './components/Input'
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <Input />
      </>
    );
  }
});