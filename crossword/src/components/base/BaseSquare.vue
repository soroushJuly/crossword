<template>
  <div v-if="content && !content.block" class="block">
    <input
      v-model="value"
      :id="content._id"
      type="text"
      name="cell"
      class="block__input"
      @keydown="wordEntered"
      @keyup="wordEnteredUp"
    />
  </div>
  <div class="block block--filled" v-else></div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapMutations(["updateAnswers"]),
    wordEntered() {
      if (!this.value) {
        return;
      }

      this.value = "";
    },
    wordEnteredUp(e) {
      this.updateAnswers({ content: e.key, id: this.content._id });
      this.$emit("keyEntered");
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
  width: 70px;
  height: 70px;
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
