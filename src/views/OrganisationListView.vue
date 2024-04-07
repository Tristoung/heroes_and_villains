<template>
  <div class="about">
    <table class="org-table">
      <thead>
        <tr>
          <th>Nom de l'organisation</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(org, index) in listOrgs" :key="index" @click="orgClicked(org)">
          <td>{{ org.name }}</td>
          <td>{{ org._id }}</td>
        </tr>
      </tbody>
    </table>

    <vue-dialog ref="orgModal">
      <template v-slot:header>
        <h3>Informations sur l'organisation</h3>
      </template>
      <template v-slot:body>
        <p>Nom de l'organisation : {{ selectedOrg.name }}</p>
        <p>ID de l'organisation : {{ selectedOrg._id }}</p>
      </template>
      <template v-slot:footer>
        <button @click="copyToClipboard(selectedOrg._id)">Copier l'ID</button>
        <button @click="$refs.orgModal.hide()">Fermer</button>
      </template>
    </vue-dialog>

  </div>
</template>

<script>
  export default {
    name: 'OrgList',
    data: () => {
      return {
        listOrgs: []
      }
    },
    mounted() {
      this.$store.dispatch('fetchOrgs')
        .then(() => {
          console.log('Organizations fetched successfully');
          this.listOrgs = this.$store.state.orgs.data
        })
        .catch((error) => {
          console.error('Error fetching organizations:', error);
        });
    },
    computed: {
      
    },
    methods: {
      test() {
        console.log(this.listOrgs);
      },
      orgClicked(org) {
        this.selectedOrg = org;
        this.$refs.orgModal.show();
      },
      copyToClipboard(text) {
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log('ID copied to clipboard:', text);
          })
          .catch((error) => {
            console.error('Error copying to clipboard:', error);
          });
      }

    }
  }
</script>

<style>
.org-table {
  width: 100%;
  border-collapse: collapse;
}

.org-table th,
.org-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.org-table th {
  background-color: #f2f2f2;
}

.org-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.org-table tbody tr:hover {
  background-color: #ddd;
}
</style>
