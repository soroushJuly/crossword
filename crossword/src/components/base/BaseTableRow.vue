<template>
  <div class="cross-row">
    <BaseSquare
      v-for="(cell, index) in cells"
      :key="index"
      :content="cell"
      :id="`${cell.x},${cell.y}`"
    />
  </div>
</template>

<script>
import BaseSquare from "@/components/base/BaseSquare";

export default {
  name: "BaseTableRow",
  components: {
    BaseSquare,
  },
  props: {
    cells: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.cross-row {
  display: flex;
  margin: auto;
}
</style>
