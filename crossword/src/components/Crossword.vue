<template>
  <div>
    <BaseTableRow
      v-for="(row, index) in rows"
      :key="index"
      :cells="row.cells"
    />
  </div>
</template>

<script>
import BaseTableRow from "@/components/base/BaseTableRow.vue";

export default {
  components: {
    BaseTableRow,
  },
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
