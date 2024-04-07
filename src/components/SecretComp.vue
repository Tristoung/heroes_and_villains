<template>
    <div>
      <input type="text" v-model="orgName" placeholder="Nom">
      <input type="text" v-model="secretPhrase" placeholder="Phrase secrète">
      <button @click="storeSecret">Enregistrer</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        secretPhrase: '',
        orgName: '',
        orgId: '',
        orgs: [],
      };
    },
    methods: {
      storeSecret() {
        this.$store.commit('setOrgPassword', this.secretPhrase);

        this.$store.dispatch('fetchOrgs')
        .then(() => {
          console.log('Organizations fetched successfully');
          this.handlePwdStored();
        })
        .catch((error) => {
          console.error('Error fetching organizations:', error);
        });
      },
      getOrgIdWithName(name) {
        for (let orgIndex in this.orgs) {
          if (this.orgs[orgIndex].name == name) {
            return this.orgs[orgIndex]._id;
          }
        }
        return null;
      },
      handlePwdStored() {
        this.orgs = this.$store.state.orgs.data;
        this.orgId = this.getOrgIdWithName(this.orgName)
        console.log(this.orgId);

        this.$store.dispatch('getOrgById', { id: this.orgId, password: this.secretPhrase })
          .then(() => {
            console.log('Organisation fetched successfully');
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération de lorganisation :', error);
          });
      }
    }
  };
  </script>
  