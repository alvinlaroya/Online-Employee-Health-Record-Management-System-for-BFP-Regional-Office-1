<template>
  <v-container >
    {{ title }}
    <h2>{{ total }}</h2>
  </v-container>
</template>

<script>


export default {
    data:()=>({
        title: null,
        total: null
    }),
    mounted() {
    // Retrieve the title and total values from the route parameters
    this.title = this.$route.params.title;
    this.total = this.$route.params.total;
  }
}
</script>

<style>

</style>