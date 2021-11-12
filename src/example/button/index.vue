<template>
  <div class="block">
    <span class="h2">基础用法</span>
    <div class="block-flex">
      <br />
      <SButton type="primary" icon-placement="right">
        <template #icon>
          <SIcon>
            <IosAdd />
          </SIcon>
        </template>
        100元
      </SButton>
      <br />
      <SButton type="default">
        100元
        <template #icon>
          <SIcon>
            <IosAmericanFootball />
          </SIcon>
        </template>
      </SButton>
      <br />
      <SButton type="info">
        100元
        <template #icon>
          <SIcon>
            <IosAmericanFootball />
          </SIcon>
        </template>
      </SButton>
      <br>
       <SButton type="success">
        100元
        <template #icon>
          <SIcon>
            <IosAmericanFootball />
          </SIcon>
        </template>
      </SButton>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import SButton from '../../packages/button/index'
  import SIcon from './../../packages/icon/index'
  import { IosAdd, IosAmericanFootball } from '@vicons/ionicons4'
  export default defineComponent({
    components: {
      SButton,
      IosAdd,
      SIcon,
      IosAmericanFootball,
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
