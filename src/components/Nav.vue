<template>
  <v-toolbar>
    <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">
      <h1 class="teal--text text--accent-3">Shawara.</h1>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="mx-1" color="teal accent-3" outlined to="/enter">
      Enter
    </v-btn>
    <v-btn text class="teal accent-3 mx-1" dark to="/join"> Join </v-btn>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style>
</style>