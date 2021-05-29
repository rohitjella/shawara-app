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
      <v-form @submit="signup" method="post">
        <v-text-field
          label="Full Name"
          name="Name"
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
          v--modal="password"
          label="Password"
          name="Password"
          prepend-icon="mdi-lock"
          color="teal accent-3"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          hint="At least 8 characters"
          class="input-group--focused"
          @click:append="show = !show"
        />
      </v-form>
    </v-card-text>
    <div class="text-center my-3">
      <v-btn rounded color="teal accent-3" dark to="/create-profile">
        sign up
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
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show: false,
    password: "Password",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
};
</script>

<style>
</style>