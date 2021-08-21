<template>
  <div>
    <!-- <div v-for="i in 10" :key="i" class="cross-row"> -->
    <div v-for="(row, i) in details" :key="i" class="cross-row">
      <!-- <BaseSquare v-for="(cell, index) in 10" :key="index" :content="cell" /> -->
      <BaseTableRow :cells="row.cells" />
    </div>
    <button @click="submitCrossword" class="btn">submit</button>
  </div>
</template>

<script>
// import BaseSquare from "@/components/base/BaseSquare";
import BaseTableRow from "@/components/base/BaseTableRow";

export default {
  components: {
    // BaseSquare,
    BaseTableRow,
  },
  props: {
    details: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    submitCrossword() {
      let result = [];
      const answerObj = this.$store.state.answers;

      for (const [key, value] of Object.entries(answerObj)) {
        result.push({ id: key, content: value });
      }

      console.log(result);
    },
  },
};
</script>

<style lang="scss" scoped>
.cross-row {
  display: flex;
}
.btn {
  margin-top: 1rem;
}
</style>
