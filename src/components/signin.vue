<template>
  <v-col cols="12" md="8">
    <v-card-text class="mt-12">
      <h1 class="text-center teal--text text--accent-3">Sign in to Shawara.</h1>
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
      <h4 class="text-center mt-4">Ensure your email for registration</h4>
      <v-form @submit="login" method="post">
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
          id="password"
          label="Password"
          name="Password"
          prepend-icon="mdi-lock"
          color="teal accent-3"
          :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.emailMatch]"
          :type="show4 ? 'text' : 'password'"
          hint="At least 8 characters"
          @click:append="show4 = !show4"
        />
      </v-form>
      <h3 class="text-center mt-3">Forgot your password</h3>
    </v-card-text>
    <div class="text-center my-3">
      <v-btn rounded color="teal accent-3" dark to="/create-profile">
        sign in
      </v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
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
};
</script>

<style>
</style>