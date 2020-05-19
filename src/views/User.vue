<template lang="pug">
  .card
    img(v-bind:src="user.avatar")
    h1 {{user.first_name}} {{user.last_name}}
    p email:{{user.email}}
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
        user: {}
      }
    },
    created() {
      //do something after creating vue instance
    this.user = this.$store.getters.getUser
  
      }
  }
</script>
