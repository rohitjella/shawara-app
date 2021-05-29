<template>
  <div class="hr-profile">
    <v-container class="my-5">
      <v-row class="align-center" justify="space-around">
        <v-col cols="12" md="3">
          <v-list-item two-line>
            <v-list-item-avatar size="80" tile>
              <img src="https://randomuser.me/api/portraits/women/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                Chakradhar
              </v-list-item-title>
              <v-list-item-subtitle>technical HR</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" md="3" align="end">
          <v-btn outlined rounded color="teal accent-3">Schedule</v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="my-5">
        <v-list-item-title class="title mb-1">
          <v-icon color="teal accent-3">mdi-human-male</v-icon> About
        </v-list-item-title>

        <p class="subtitle my-3">
          Greyhound divisely hello coldly fonwderfully Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Accusantium eveniet ea, rem quis
          similique, itaque inventore tempora deserunt possimus omnis neque
          magnam debitis qui dolorem praesentium alias quaerat ad sit.
        </p>
      </v-row>
      <v-row class="my-5">
        <v-list-item-title class="title mb-1">
          <v-icon color="teal accent-3">mdi-account-star</v-icon> Experience
        </v-list-item-title>
        <v-chip class="ma-2" dark color="teal accent-3"> 5 yrs </v-chip>
      </v-row>
      <v-row class="my-5">
        <v-list-item-title class="title mb-1">
          <v-icon color="teal accent-3">mdi-earth</v-icon> Experience
        </v-list-item-title>
        <v-chip-group>
          <v-chip
            v-for="lang in languages"
            :key="lang"
            outlined
            color="teal accent-3"
          >
            {{ lang }}
          </v-chip>
        </v-chip-group>
      </v-row>
      <v-divider></v-divider>
      <v-row class="my-5">
        <v-col cols="12">
          <v-card>
            <v-subheader>Reviews</v-subheader>

            <v-list two-line>
              <template v-for="n in 6">
                <v-list-item :key="n">
                  <v-list-item-avatar color="grey darken-1">
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Message {{ n }}</v-list-item-title>

                    <v-list-item-subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nihil repellendus distinctio similique
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider
                  v-if="n !== 6"
                  :key="`divider-${n}`"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    languages: ["telugu", "hindi", "english"],
  }),
};
</script>

<style>
</style>