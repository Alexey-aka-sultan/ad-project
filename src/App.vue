<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item v-for="(link, ind) in links" :key="ind" :to="link.url">
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar dark color="primary">
        <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title>Ad application</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text v-for="(link, ind) in links" :key="ind" :to="link.url">
            <v-icon left>{{link.icon}}</v-icon>
            {{ link.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { title: "Login", icon: "mdi-lock", url: "/login" },
      { title: "Registration", icon: "mdi-face", url: "/registration" },
      { title: "Orders", icon: "mdi-bookmark-outline", url: "/orders" },
      { title: "New ad", icon: "mdi-note-plus-outline", url: "/new-ad" },
      { title: "My ads", icon: "mdi-format-list-bulleted", url: "/ad-list" }
      ]
  })
};
</script>
