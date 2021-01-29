<template>
  <div>
    <q-btn color="primary" icon="check" label="Click Me" @click="clicked" />
    <q-btn color="primary" icon="check" label="Click Me too" @click="clicked2" />
    <q-btn color="primary" icon="check" label="Click Me Three" @click="clicked3" />
  </div>
</template>

<script>
export default {
  methods: {
    clicked() {
      alert('asd');
    },
    clicked2() {
      alert('def');
    },
    clicked3() {
      alert('zxc');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>