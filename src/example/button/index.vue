<template>
  <div class="block">
    <span class="h2">基础用法</span>
    <div class="block-flex">
      <br />
      <SButton type="primary"> primary </SButton>
      <br />
      <SButton type="default"> default </SButton>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import SButton from '../../packages/button/index'
  export default defineComponent({
    components: {
      SButton,
    },
  })
</script>
<style scoped lang="scss">
  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-flex {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  .h2 {
    font-size: 24px;
    cursor: pointer;
  }
</style>
