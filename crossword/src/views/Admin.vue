<template>
  <div>
    <form
      id="contentForm"
      name="contentForm"
      class="form"
      @submit.prevent="sendForm"
    >
      <div v-for="i in 10" :key="i" class="form-row">
        <label for="">Clue:</label>
        <input type="text" @input="clueChanged(i, $event.target.value)" />
        <label for="">Answer:</label>
        <input type="text" @input="answerChanged(i, $event.target.value)" />
      </div>
      <button type="submit" class="btn">submit</button>
    </form>

    <span class="error">
      {{ error }}
    </span>

    <span class="success">
      {{ table }}
    </span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      content: new Array(10).fill({ clue: "", answer: "" }),
      error: "",
      table: null,
    };
  },
  methods: {
    sendForm() {
      axios
        .post(
          "http://192.168.1.175:5000/api/table/generate",
          JSON.stringify({
            input: this.content,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          this.table = res.data && res.data.result;
          document.getElementById("contentForm").reset();
        })
        .catch((err) => {
          this.error = err;
        });
    },
    clueChanged(i, value) {
      this.content[i - 1] = { ...this.content[i - 1], clue: value };
    },
    answerChanged(i, value) {
      this.content[i - 1] = { ...this.content[i - 1], answer: value };
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  input {
    margin: 0 0.5rem;
  }
}

.error {
  color: red;
}

.success {
  color: green;
}

.btn {
  max-width: 100px;
}
</style>
