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
                    <signin />
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center">Hello Friend!</h1>
                        <h4 class="text-center mt-2">
                          Enter your personel details and start journey with us
                        </h4>
                      </v-card-text>
                      <div class="text-center my-3">
                        <v-btn rounded outlined="" dark @click="step++"
                          >Sign up</v-btn
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
                          >sign in</v-btn
                        >
                      </div>
                    </v-col>
                    <signup />
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
import Signin from "../components/signin.vue";
import Signup from "../components/signup.vue";

export default {
  name: "Auth",

  components: {
    Nav,
    Signin,
    Signup,
  },
  data: () => ({
    step: 1,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show4: false,
    password: "Password",
    show2: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  props: {
    source: String,
  },
  methods: {
    login(e) {},
    signup() {},
  },
};
</script>
