<template>
  <div>
    <div v-for="i in 10" :key="i" class="cross-row">
      <BaseSquare v-for="(cell, index) in 10" :key="index" :content="cell" />
    </div>
  </div>
</template>

<script>
import BaseSquare from "@/components/base/BaseSquare";

export default {
  components: {
    BaseSquare,
  },
  props: {
    details: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.cross-row {
  display: flex;
}
</style>
