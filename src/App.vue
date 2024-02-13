<template>
  <v-app v-on:click.native="handleClick">
    <v-app-bar
      app
      color="secondary"
      dark
      clipped
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
          @mouseover="openDrawer"
          @mouseleave="closeDrawer"
          @click="toggleDrawer"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/logo-text.png"
          width="250"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/login"
        text
      >
        <span class="mr-2">Se connecter</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :right="$vuetify.rtl"
      absolute
      style="margin-top: 56px;"
    >
      <v-list>
        <v-list-item :to="{ name: 'about' }">
          <v-list-item-title>A propos</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'team' }">
          <v-list-item-title>Equipe</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'teamList' }">
          <v-list-item-title>Liste d'équipes</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'organisation' }">
          <v-list-item-title>Organisation</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'organisationList' }">
          <v-list-item-title>Liste d'organisations</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    selected: false
  }),

  methods: {
    toggleDrawer() {
      if (!this.selected) {
        this.drawer = true;
        this.selected = true;
      } else {
        console.log("coucou");
        this.drawer = false;
        this.selected = false;
      }
    },
    handleClick(event) {
      // Vérifier si le tiroir est ouvert et si le clic n'est pas sur le menu ou le logo
      if (this.drawer && !event.target.closest('.v-navigation-drawer') && !event.target.closest('.shrink')) {
        console.log("coucou");
        this.drawer = false;
        this.selected = false;
      }
    },
    openDrawer() {
      this.drawer = true; // Open the drawer when mouse is over the logo
    },
    closeDrawer() {
      if (!this.selected) {
        console.log("coucou");
        this.drawer = false; // Close the drawer when mouse leaves the logo
      }
    }
  }
};
</script>
