<template>
    <div class="about">
      <h1>This is an organisation list page</h1>
      <button @click="test"> TEST </button>

    </div>
  </template>

<script>
  export default {
    name: 'OrgList',
    data: () => {
      return {
        index: 0
      }
    },
    computed: {

    },
    methods: {
      test() {
        console.log("1");
      }
    }
  }
</script>