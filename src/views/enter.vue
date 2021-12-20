<template>
  <div class="auth">
    <Nav />
    <v-content>
      <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <js-signin />
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center">Hello Friend!</h1>
                        <h4 class="text-center mt-2">
                          Enter your personel details and start journey with us
                        </h4>
                      </v-card-text>
                      <div class="text-center my-3">
                        <v-btn rounded outlined="" dark @click="step++"
                          >Sign in as HR</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center">Welcome Back!</h1>
                        <h4 class="text-center">
                          To keep connected with us please login with your
                          personel info
                        </h4>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >Sign in as Job Seeker</v-btn
                        >
                      </div>
                    </v-col>
                    <hr-signin />
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import JsSignin from "../components/JsSignin.vue";
import HrSignin from "../components/HrSignin.vue";

export default {
  name: "Auth",

  components: {
    Nav,
    JsSignin,
    HrSignin,
  },
  data: () => ({
    step: 1,
  }),
};
</script>
