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
      <p class="text-red">{{ error }}</p>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          label="First Name"
          prepend-icon="mdi-account"
          type="text"
          color="teal accent-3"
          v-model="fname"
          :rules="nameRules"
        />
        <v-text-field
          label="Last Name"
          prepend-icon="mdi-account"
          type="text"
          color="teal accent-3"
          v-model="lname"
          :rules="nameRules"
        />
        <v-text-field
          label="Email"
          prepend-icon="mdi-email"
          type="email"
          color="teal accent-3"
          v-model="email"
          :rules="emailRules"
          required
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          prepend-icon="mdi-lock"
          color="teal accent-3"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        />
        <div class="text-center my-3">
          <v-btn
            rounded
            color="teal accent-3"
            dark
            type="submit"
            @click="signup"
          >
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
    valid: false,
    show: false,
    fname: "",
    lname: "",
    email: "",
    password: "",
    error: "",
    nameRules: [(v) => !!v || "Name is required"],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is Required",
      (v) => v.length >= 8 || "Password must be 8 characters or more",
    ],
  }),
  methods: {
    signup(e) {
      this.$refs.form.validate();
      e.preventDefault();
      axios
        .post("http://127.0.0.1:5000/hr/register", {
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          password: this.password,
        })
        .then((request) => this.loginSuccessful(request));
    },
    loginSuccessful(req) {
      if (req.data.email == 1) {
        alert("hi");
      } else {
        alert("bye");
      }
    },
  },
};
</script>

<style>
</style>