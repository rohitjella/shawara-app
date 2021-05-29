<template>
  <div class="profile">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="my-5">
            <v-list align="center">
              <v-list-item class="d-flex justify-center">
                <v-list-item-avatar tile size="100">
                  <v-img
                    src="https://randomuser.me/api/portraits/women/85.jpg"
                  ></v-img>
                </v-list-item-avatar>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    Sandra Adams
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    sandra_a88@gmail.com
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-btn outlined color="teal accent-3" rounded class="my-5">
                Change Password
              </v-btn>
            </v-list>
          </v-card>
          <v-card class="my-5">
            <h1 class="headline mx-3 pt-3">Payment Information</h1>
            <v-divider></v-divider>
            <v-list disabled>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      Payment Date
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-title> 11-May-2021 </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      Payment ID
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-title> 12345ABCDE </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="7">
          <v-card class="my-5">
            <h1 class="headline mx-3 pt-3">Personal Information</h1>
            <v-divider></v-divider>
            <div class="px-5 my-5">
              <v-text-field
                label="Full Name"
                v-model="name"
                :readonly="!toggleDisable"
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="email"
                :readonly="!toggleDisable"
              ></v-text-field>
              <v-text-field
                label="Education"
                v-model="education"
                :readonly="!toggleDisable"
              ></v-text-field>
              <v-text-field
                label="Date of Birth"
                v-model="dob"
                :readonly="!toggleDisable"
              ></v-text-field>
              <v-combobox
                v-model="skill"
                label="Skills"
                multiple
                chips
                :readonly="!toggleDisable"
              ></v-combobox>
              <v-combobox
                v-model="language"
                label="Languages"
                multiple
                chips
                :readonly="!toggleDisable"
              ></v-combobox>
              <v-combobox
                label="Interest"
                v-model="interest"
                chips
                multiple
                :readonly="!toggleDisable"
              ></v-combobox>
            </div>
            <v-btn
              class="ma-3"
              :color="toggleDisable ? 'primary' : ''"
              @click="toggleDisable = !toggleDisable"
            >
              Edit
            </v-btn>
            <v-btn
              class="ma-3"
              :color="toggleDisable ? 'success' : ''"
              :disabled="!toggleDisable"
              @click="toggleDisable = !toggleDisable"
              >Save</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "Rohit Jella",
      email: "rohit.jella@gmail.com",
      education: "MBA",
      dob: "11-May-1997",
      skill: ["c", "c++", "java"],
      interest: ["web development", "robotic process automation"],
      language: ["Telugu", "Hindi", "English"],
      toggleDisable: false,
    };
  },
};
</script>

<style>
</style>