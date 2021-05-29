<template>
  <div class="home">
    <Nav />
    <!-- banner -->
    <v-container class="my-10 py-10">
      <v-row class="d-flex align-center">
        <v-col cols="12" md="6">
          <h1 class="display-2 my-3">Welcome To Shawara.</h1>
          <p class="headline">
            Enhance your skills by connecting with Best HRs your choice.
          </p>
          <v-btn color="teal accent-3" outlined rounded to="/auth"
            >Try now</v-btn
          >
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="../assets/banner.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <!-- about -->
    <div class="teal lighten-5 my-10 py-10">
      <v-container>
        <v-row class="d-flex align-center">
          <v-col cols="12" md="6">
            <v-img src="../assets/about.svg"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <h1 class="display-1 my-3">Who We Are?</h1>
            <p class="headline">
              Shawara is a platform where job seekers can interact with HRs with
              real-world experience in a variety of fields who can assist them
              in charting a career path.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- steps -->
    <v-container class="my-10 py-10">
      <h1 class="mb-5 display-1 text-center">Easy to Connect</h1>
      <v-row>
        <v-col cols="12" md="3" v-for="item in items" :key="item.title">
          <div align="center">
            <v-list-item-avatar
              size="125"
              color="teal accent-3"
              rounded="50%"
              class=""
            >
              <v-icon size="75" dark>{{ item.icon }}</v-icon>
            </v-list-item-avatar>
          </div>
          <v-list-item-title class="headline my-3 text-center">
            {{ item.title }}
          </v-list-item-title>
        </v-col>
      </v-row>
    </v-container>
    <!-- plans -->
    <div class="teal lighten-5 my-10 py-10">
      <v-container>
        <h1 class="my-5 display-1 text-center">A Plan for Everyone</h1>
        <v-row>
          <v-col cols="12" md="4">
            <v-card width="400">
              <v-card-title class="headline teal accent-1">
                Basic Plan @ ₹299
              </v-card-title>
              <v-divider></v-divider>
              <v-list disabled>
                <v-list-item-group>
                  <v-list-item v-for="(item, i) in basic" :key="i">
                    <v-list-item-content>
                      <v-list-item-title class="title">{{
                        item.text
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card width="400">
              <v-card-title class="headline teal accent-1">
                Pro Plan @ ₹399
              </v-card-title>
              <v-divider></v-divider>
              <v-list-item>
                <v-list flat>
                  <v-list-item-group>
                    <v-list-item v-for="(item, i) in basic" :key="i">
                      <v-list-item-content>
                        <v-list-item-title class="title">{{
                          item.text
                        }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card width="400">
              <v-card-title class="headline teal accent-1">
                International Plan @ $99
              </v-card-title>
              <v-divider></v-divider>
              <v-list-item>
                <v-list flat>
                  <v-list-item-group>
                    <v-list-item v-for="(item, i) in basic" :key="i">
                      <v-list-item-content>
                        <v-list-item-title class="title">{{
                          item.text
                        }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- app -->
    <v-container class="my-10 py-10">
      <v-row class="d-flex align-center">
        <v-col cols="12" md="6">
          <v-img src="../assets/my-app.svg"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h1 class="display-1 my-3">Do More with Shawara. App</h1>
          <p class="headline">
            With Shawara App unlock all power of our personlized meeting
            experience by enhacing your skill anytime, anywhere. Discover how
            useful to build your career in different industries.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <!-- call to action -->
    <div class="teal lighten-5 my-10 py-10">
      <v-container>
        <v-row class="d-flex align-center">
          <v-col cols="12" md="6">
            <h1 class="display-1 my-3">Download Shawara. Now</h1>
            <p class="headline">
              Start or schedule meeting anytime, anywhere with our Android and
              iPhone apps.
            </p>
            <div class="d-flex">
              <v-img
                src="../assets/app-store.svg"
                max-width="30%"
                class="mx-3"
              ></v-img>
              <v-img
                src="../assets/play-store.svg"
                max-width="30%"
                class="mx-3"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="../assets/download.svg"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";

export default {
  name: "Home",

  components: {
    Nav,
  },
  data: () => {
    return {
      items: [
        { title: "Signup", icon: "mdi-account-check" },
        { title: "Create Profile", icon: "mdi-form-select" },
        { title: "Search with HR", icon: "mdi-account-search" },
        { title: "Connect with HR", icon: "mdi-lan-connect" },
      ],
      basic: [
        { text: "1 time access" },
        { text: "limited profiles" },
        { text: "chat with HR for 1 time" },
      ],
    };
  },
};
</script>

<style scoped>
</style>