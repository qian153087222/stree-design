<template>
  <div class="block">
    <span class="h2">基础用法</span>
    <div class="block-flex">
      <SButton>
      </SButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SButton from "../../src/button/index";
export default defineComponent({
  components: {
    SButton,
  },
});
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