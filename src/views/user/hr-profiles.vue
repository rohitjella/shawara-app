<template>
  <div class="hr-profiles">
    <v-card
      class="orange--text text--accent-4"
      color="bg-teal accent-5"
      max-width="100%"
    >
      <v-card-title>
        <h1 class="mx-auto my-16 display-1">Hi Rohit Jella!</h1>
      </v-card-title>
    </v-card>
    <v-card max-width="100%"> </v-card>
    <div class="grey lighten-2 my-10 py-10">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
            v-for="profile in profiles"
            :key="profile.name"
            router
            :to="profile.link"
          >
            <v-card class="mx-auto" max-width="344" outlined elevation="2">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar size="80" tile>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                    <v-list-item-subtitle
                      >Founder of Vuetify</v-list-item-subtitle
                    >
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn
                      :class="fav ? 'red--text' : ''"
                      icon
                      @click="fav = !fav"
                    >
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
                <v-rating
                  v-model="rating"
                  color="yellow darken-3"
                  background-color="yellow darken-3"
                  half-increments
                  hover
                ></v-rating>
              </v-list>
              <v-card-actions>
                <v-btn rounded color="teal accent-3" class="px-5" dark>
                  View Profile
                </v-btn>
                <v-btn outlined rounded color="teal accent-3" class="px-5" dark>
                  Schedule
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      fav: true,
      rating: "3",
    };
  },
};
</script>

<style scoped>
.bg-teal {
  background: rgb(170, 255, 169);
  background: linear-gradient(
    90deg,
    rgba(170, 255, 169, 1) 0%,
    rgba(17, 255, 189, 1) 100%
  );
}
</style>