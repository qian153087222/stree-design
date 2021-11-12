<template>
  <div class="block">
      <Scarousel>
      </Scarousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Scarousel from '../../packages/carousel/index'
export default defineComponent({
  components: {
    Scarousel,
  },
  methods: {
    addNew(e: any) {
      console.log(e)
    },
  },
})
</script>
<style scoped lang="scss">
</style>
