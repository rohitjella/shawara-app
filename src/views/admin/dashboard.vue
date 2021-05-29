<template>
  <div class="dashboard">
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" md="4" v-for="item in items" :key="item.title">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item two-line>
              <v-list-item-avatar size="80" color="teal accent-3">
                <v-icon dark size="40">{{ item.icon }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="title mb-4">{{ item.title }}</div>
                <v-list-item-title class="headline mb-1">
                  Total: {{ item.total }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn
                outlined
                rounded
                dark
                color="teal accent-3"
                class="px-3"
                :to="item.link"
              >
                view more
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Users",
          total: "5",
          icon: "mdi-account-group",
          link: "/admin/users",
        },
        {
          title: "HRS",
          total: "3",
          icon: "mdi-account-group-outline",
          link: "/admin/hrs",
        },
        {
          title: "Commission",
          total: "1000",
          icon: "mdi-cash",
          link: "/admin/commission",
        },
      ],
    };
  },
};
</script>

<style>
</style>