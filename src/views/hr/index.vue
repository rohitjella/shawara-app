<template>
  <div class="user">
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><h1 class="teal--text text--accent-3">Shawara.</h1></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn dark class="red accent-3"> exit </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <!-- <v-list-item-subtitle>Logged In</v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <v-list shaped>
        <v-subheader>Menu</v-subheader>
        <v-list-item-group color="teal accent-4">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        text: "My Calendar",
        icon: "mdi-calendar-month",
        link: "/hr/calendar",
      },
      {
        text: "My Commission",
        icon: "mdi-cash",
        link: "/hr/commission",
      },
      { text: "My Profile", icon: "mdi-account-circle", link: "/hr/profile" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>