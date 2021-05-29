<template>
  <v-col cols="12" md="8">
    <v-card-text class="mt-12">
      <h1 class="text-center teal--text text--accent-3">
        Create your profile as an HR
      </h1>
      <h4 class="text-center mt-4">Ensure your details are correct</h4>
      <v-form ref="form" v-model="valid" lazy-validation method="post">
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          label="Profile Picture"
          required
        ></v-file-input>
        <v-autocomplete
          ref="country"
          v-model="country"
          :rules="[() => !!country || 'This field is required']"
          :items="countries"
          prepend-icon="mdi-flag"
          label="Country"
          placeholder="Select..."
          required
        ></v-autocomplete>
        <v-text-field
          label="Date of Birth"
          name="DOB"
          prepend-icon="mdi-calendar-month"
          type="text"
          color="teal accent-3"
          v-model="DOB"
          required
          :rules="fieldRules"
        />
        <v-text-field
          label="Highest Education"
          name="education"
          prepend-icon="fa fa-user-graduate"
          type="text"
          color="teal accent-3"
          v-model="education"
          :rules="fieldRules"
          required
        />
        <v-text-field
          label="Total Experience"
          name="skills"
          prepend-icon="fas fa-users-cog"
          type="text"
          color="teal accent-3"
          v-model="experience"
          :rules="fieldRules"
          required
        />
        <v-textarea
          name="textarea"
          prepend-icon="fas fa-keyboard"
          label="About me"
          v-model="textarea"
          :rules="fieldRules"
        ></v-textarea>
        <v-combobox
          v-model="language"
          :rules="[() => !!language || 'This field is required']"
          :items="languages"
          label="Languages known"
          prepend-icon="fas fa-language"
          multiple
          chips
          required
        ></v-combobox>
      </v-form>
    </v-card-text>
    <div class="text-center my-3">
      <v-btn
        rounded
        color="teal accent-3"
        dark
        :disabled="!valid"
        class="mr-4"
        @click="validate"
        Done
        to="/profile"
      >
        Done
      </v-btn>
    </div>
  </v-col>
</template>

<script>
export default {};
</script>

<style>
</style>