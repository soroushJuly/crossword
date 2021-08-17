<template>
  <div v-if="content && !content.block" class="block">
    <input type="text" name="cell" id="3" class="block__input" />
  </div>
  <div class="block block--filled" v-else></div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40px;
  height: 40px;
  border: 1px solid #222;
  &--filled {
    background: #222;
  }
  &__input {
    text-align: center;
    max-width: 35px;
    max-height: 35px;
    border: none;
    &:focus {
      outline: none;
    }
  }
}
</style>
