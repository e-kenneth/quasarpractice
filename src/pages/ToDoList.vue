<template>
  <div>
    <q-input v-model="text" label="Standard" />
    {{$store.state.todolist.text}}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    text() {
      return this.$store.state.todolist.text;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>