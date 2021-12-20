<template>
  <div class="create-profile">
    <v-container class="">
      <v-row class="d-flex align-center">
        <v-col cols="12" sm="6">
          <v-img src="../assets/profile_image.svg"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card class="px-5" elevation="5">
            <v-card-text class="mt-12">
              <h2 class="text-center teal--text text--accent-3 pt-3">
                Create your profile as an HR
              </h2>
              <h4 class="text-center mt-4">Ensure your details are correct</h4>
              <hrprofile />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import hrprofile from "../components/hrprofile.vue";

export default {
  name: "create-profile",

  components: {
    hrprofile,
  },
  data: () => ({}),
};
</script>

<style scoped>
.create-profile {
  background-color: aquamarine;
  height: 100%;
  font-family: "Varela Round", sans-serif;
}
</style>