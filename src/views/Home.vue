<template lang="pug">
  .home

    input(type="text", v-model="searchValue", @keydown.enter.prevent='searchName' )
    button(@click.prevent='searchName' ) Search
    select(v-model="selected")
      option(v-for="option in optionSize") {{option}}
    ListUsers(:size = "Number(selected)")

</template>

<script>
// @ is an alias to /src
import ListUsers from '@/components/ListUsers.vue'

export default {
  name: 'Home',
  components: {
    ListUsers
  },
  data() {
    return {
      optionSize: ["5","10","20"],
      selected:"",
      searchValue:""
    }
  },
  created() {
    //do something after creating vue instance
    this.$store.dispatch('createListUsers')
    this.selected = this.optionSize[0]
  },
  methods: {
    searchName() {
      this.$store.commit("SET_SEARCH_VALUE", this.searchValue)
    }
  }
}
</script>

<style >

</style>
