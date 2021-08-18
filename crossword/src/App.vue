<template>
  <div id="app">
    <Table :details="details" />
  </div>
</template>

<script>
import Table from "./components/Crossword.vue";

export default {
  name: "App",
  components: {
    Table,
  },
  data() {
    return {
      details: [
        { answer: "hello", orientation: "none", clue: "a question" },
        {
          answer: "who",
          startx: 1,
          starty: 5,
          orientation: "across",
          position: 1,
          clue: "a question3",
        },
        {
          answer: "am",
          startx: 6,
          starty: 4,
          orientation: "down",
          position: 2,
          clue: "a question",
        },
        { answer: "i", orientation: "none", clue: "a question" },
        {
          answer: "bye",
          startx: 8,
          starty: 2,
          orientation: "down",
          position: 3,
          clue: "a question",
        },
        {
          answer: "gooz",
          startx: 4,
          starty: 7,
          orientation: "across",
          position: 4,
          clue: "a question3",
        },
        {
          answer: "chos",
          startx: 5,
          starty: 1,
          orientation: "down",
          position: 5,
          clue: "a question",
        },
        { answer: "an", orientation: "none", clue: "a question" },
        {
          answer: "goh",
          startx: 3,
          starty: 4,
          orientation: "down",
          position: 6,
          clue: "a question",
        },
        {
          answer: "gav",
          startx: 4,
          starty: 7,
          orientation: "down",
          position: 4,
          clue: "a question",
        },
        {
          answer: "gusale",
          startx: 3,
          starty: 4,
          orientation: "across",
          position: 6,
          clue: "a question",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
