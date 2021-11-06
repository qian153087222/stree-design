<template>
  <div class="block">
    <span class="h2">基础用法</span>
    <div class="block-flex">
      <div>带弹出提示基本的单行省略。</div>
      <SEllipsis style="max-width: 240px" @addNew="addNew">
        <template #default>点击</template>
        <template #tooltip>不是你卷我 就是我卷你 我要卷死你</template>
      </SEllipsis>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SEllipsis from "../../packages/ellipsis/index";
export default defineComponent({
  components: {
    SEllipsis,
  },
  methods:{
    addNew(e:any){
      console.log(e);
    }
  }
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