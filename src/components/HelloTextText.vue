<template>
  <h1>{{ editText }}</h1>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['moduleB/editText']),
  },
};
</script>

<style>
</style>
