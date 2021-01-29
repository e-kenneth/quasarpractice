<template>
  <div>
    <q-btn color="primary" icon="check" :label="alertText" @click="clicked" />
  </div>
</template>

<script>
export default {
    props: {
        alertText: String,
    },
    methods: {
        clicked() {
            alert(this.alertText);
        }
    },
};
</script>

<style lang="scss" scoped>
</style>