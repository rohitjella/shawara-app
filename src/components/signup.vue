<template>
  <v-col cols="12" md="8">
    <v-card-text class="mt-12">
      <h1 class="display-1 text-center teal--text text--accent-3 mb-5">
        Welcome Back to Shawara.
      </h1>
      <v-alert dense outlined text type="error" v-if="error" class="mx-16">
        {{ this.$store.state.error }}
      </v-alert>

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
          <v-btn
            rounded
            color="teal accent-3"
            dark
            type="submit"
            @click="join()"
          >
            Join
          </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    error: "",
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
    async join(e) {
      const valid = this.$refs.form.validate();
      e.preventDefault();
      if (valid) {
        this.$store.dispatch("join", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style>
</style>