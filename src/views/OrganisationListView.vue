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
        <tr v-for="(org, index) in listOrgs" :key="index">
          <td>{{ org.name }}</td>
          <td>{{ org._id }}</td>
        </tr>
      </tbody>
    </table>

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
          // Gérer les erreurs selon votre besoin
        });
    },
    computed: {
      
    },
    methods: {
      test() {
        console.log(this.listOrgs);
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
