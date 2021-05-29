<template>
  <v-toolbar>
    <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">
      <h1 class="teal--text text--accent-3">Shawara.</h1>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text class="teal accent-3" dark to="/auth"> Enter </v-btn>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style>
</style>