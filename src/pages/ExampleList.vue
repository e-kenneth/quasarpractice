<template>
  <div>
    <q-input v-model="input" type="text" label="Label" v-on:keyup.enter="add" />

    <div class="row">
      <div class="col-6">
        <div v-for="number in numbers">
          {{ number }}
        </div>
      </div>
      <div class="col-6">
        <div v-for="number in filteredNumbers">
          {{ number }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      numbers: [
        345,
        43,
        65,
        47,
        652,
        3423,
        76,
        54756,
        23,
        4543,
        6578,
        6589,
        67554,
        654,
        676,
        63,
        32423,
        43,
      ],
    };
  },
  computed: {
      filteredNumbers() {
          let newnumbers = [];
          this.numbers.forEach(number => {
              if (number % 2 == 1) {
                  newnumbers.push(number);
              }
          });
          return newnumbers;
      }
  },
  methods: {
    add() {
      this.numbers.push(this.input);
      this.input = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>