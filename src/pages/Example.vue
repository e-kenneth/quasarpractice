<template>
  <div>
    <ExampleProps prop1="John"></ExampleProps>
    <ExampleProps prop1="Jane"></ExampleProps>
    <q-input v-model="input" type="text" label="Label" />
    <q-btn color="primary" icon="check" label="OK" @click="inputToNumbers" />
    <ExampleProps :prop1="inputProcessed"></ExampleProps>
    <hr />
    <div>
      <h5>Unprocessed data</h5>
      <div v-for="number in numbers">
        {{ number }}
      </div>
    </div>
    <div>
      <h5>Processed data</h5>
      <div v-for="number in numbersFiltered">
        {{ number }}
      </div>
    </div>
  </div>
</template>

<script>
import ExampleProps from "components/ExampleProps";

export default {
  components: {
    ExampleProps,
  },
  methods: {
    inputToNumbers() {
      this.numbers.push(this.input);
    }
  },
  data() {
    return {
      input: 1,
      numbers: [
        454,
        23,
        3246,
        54,
        1231,
        65,
        4765,
        2,
        3425,
        437,
        567,
        54,
        524132,
        421,
        532,
        634,
        75347,
        45,
      ],
    };
  },
  computed: {
    inputProcessed() {
      return this.input ** 2;
    },
    numbersFiltered(){
      let newnumbers = [];
      this.numbers.forEach(number => {
        if (number % 7 == 0) {
          newnumbers.push(number);
        }
      });
      return newnumbers;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>