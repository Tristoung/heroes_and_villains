<template>
  <v-app>
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

        <button @click="closeDrawer">Fermer le menu</button>


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
    drawer: false
  }),

  methods: {
    openDrawer() {
      this.drawer = true; 
    },
    closeDrawer() {
      this.drawer = false;
    }
  }
};
</script>
