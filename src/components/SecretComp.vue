<template>
    <div>
      <input type="text" v-model="secretPhrase" placeholder="Entrez votre phrase secrète">
      <button @click="storeSecret">Enregistrer</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        secretPhrase: ''
      };
    },
    methods: {
        storeSecret() {
            this.$store.commit('setOrgPassword', this.secretPhrase);
            this.secretPhrase = '';
      }
    }
  };
  </script>
  