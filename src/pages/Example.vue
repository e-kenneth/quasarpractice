<template>
  <div>
    <q-input v-model="a" type="text" label="A" />
    <q-input v-model="b" type="text" label="B" />
    <q-input v-model="c" type="text" label="C" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 3,
      b: 4,
    //   c: 0,
    };
  },
    computed: {
      c() {
        return Math.sqrt((this.a ** 2) + (this.b ** 2));
      },
    },
//   mounted() {
//     this.c = Math.sqrt(this.a ** 2 + this.b ** 2);
//   },
};
</script>

<style lang="scss" scoped>
</style>