<template>
  <v-col cols="12" md="8">
    <v-card-text class="mt-12">
      <h1 class="text-center teal--text text--accent-3">Create Account</h1>
      <!-- <div class="text-center mt-4">
        <v-btn class="mx-2" fab color="primary" outlined>
          <v-icon> fab fa-facebook-f </v-icon>
        </v-btn>
        <v-btn class="mx-2" fab color="red" outlined>
          <v-icon> fab fa-google </v-icon>
        </v-btn>
        <v-btn class="mx-2" fab color="info" outlined>
          <v-icon> fab fa-linkedin-in </v-icon>
        </v-btn>
      </div> -->
      <h4 class="text-center mt-4">Ensure your email for resgistration</h4>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          label="Full Name"
          name="name"
          prepend-icon="mdi-account"
          type="text"
          color="teal accent-3"
          v-model="name"
          :rules="nameRules"
        />
        <v-text-field
          label="Email"
          name="Email"
          prepend-icon="mdi-email"
          type="email"
          color="teal accent-3"
          v-model="email"
          :rules="emailRules"
          required
        />
        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          prepend-icon="mdi-lock"
          label="Password"
          counter
          color="teal accent-3"
          @click:append="show = !show"
        />
        <div class="text-center my-3">
          <v-btn rounded color="teal accent-3" dark @click="signup">
            sign up
          </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-col>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    step: 1,
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show: false,
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
  methods: {
    signup(e) {
      this.$refs.form.validate();
      e.preventDefault();
      if (this.password.length || this.email.length || this.name.length > 0) {
        axios
          .post("http://localhost:4040/user/register", {
            name: this.name,
            email: this.email,
            password: this.password,
          })
          .then((response) => response.data)
          .catch(err);
      }
    },
  },
};
</script>

<style>
</style>