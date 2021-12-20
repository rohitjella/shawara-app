<template>
  <div class="auth">
    <v-app>
      <v-main>
        <v-container fluid class="fill-height">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-12">
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row>
                      <jsprofile />
                      <v-col cols="12" md="4" class="teal accent-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center">Hello Friend!</h1>
                          <h4 class="text-center mt-2">
                            Enter your personel details and start journey with
                            us
                          </h4>
                        </v-card-text>
                        <div class="text-center my-3">
                          <v-btn rounded outlined="" dark @click="step++"
                            >HR</v-btn
                          >
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" class="teal accent-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center">Friend Hello!</h1>
                          <h4 class="text-center">
                            Enter your personel details and start journey with
                            us
                          </h4>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step--"
                            >Job Seeker</v-btn
                          >
                        </div>
                      </v-col>
                      <hrprofile />
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import jsprofile from "../components/jsprofile";
import hrprofile from "../components/hrprofile";
export default {
  data: () => ({
    step: 1,
  }),
  components: { jsprofile, hrprofile },
};
</script>

<style>
</style>