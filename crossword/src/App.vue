<template>
  <div id="app">
    <Table :rows="rows" />
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
      rows: [
        {
          cells: [
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea19e6c1e57ab5f92e2",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea19e6c1e57ab5f92e3",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea19e6c1e57ab5f92e4",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea19e6c1e57ab5f92e5",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea19e6c1e57ab5f92e6",
              __v: 0,
            },
          ],
          _id: "611b6ea29e6c1e57ab5f92ec",
          number: 0,
          table: "611b6ea19e6c1e57ab5f92e1",
          __v: 0,
        },
        {
          cells: [
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea39e6c1e57ab5f92ee",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea39e6c1e57ab5f92ef",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea39e6c1e57ab5f92f0",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea39e6c1e57ab5f92f1",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea39e6c1e57ab5f92f2",
              __v: 0,
            },
          ],
          _id: "611b6ea39e6c1e57ab5f92f8",
          number: 1,
          table: "611b6ea19e6c1e57ab5f92e1",
          __v: 0,
        },
        {
          cells: [
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea39e6c1e57ab5f92fa",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea39e6c1e57ab5f92fb",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: true,
              _id: "611b6ea39e6c1e57ab5f92fc",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea39e6c1e57ab5f92fd",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: true,
              _id: "611b6ea39e6c1e57ab5f92fe",
              __v: 0,
            },
          ],
          _id: "611b6ea49e6c1e57ab5f9304",
          number: 2,
          table: "611b6ea19e6c1e57ab5f92e1",
          __v: 0,
        },
        {
          cells: [
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea49e6c1e57ab5f9306",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea49e6c1e57ab5f9307",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea49e6c1e57ab5f9308",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea49e6c1e57ab5f9309",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea49e6c1e57ab5f930a",
              __v: 0,
            },
          ],
          _id: "611b6ea49e6c1e57ab5f9310",
          number: 3,
          table: "611b6ea19e6c1e57ab5f92e1",
          __v: 0,
        },
        {
          cells: [
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea49e6c1e57ab5f9312",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea49e6c1e57ab5f9313",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea49e6c1e57ab5f9314",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea49e6c1e57ab5f9315",
              __v: 0,
            },
            {
              content: null,
              status: 0,
              block: false,
              _id: "611b6ea49e6c1e57ab5f9316",
              __v: 0,
            },
          ],
          _id: "611b6ea49e6c1e57ab5f931c",
          number: 4,
          table: "611b6ea19e6c1e57ab5f92e1",
          __v: 0,
        },
      ],
      width: 5,
      height: 5,
      // _id: "611b6ea19e6c1e57ab5f92e1",
      name: "the first table",
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
