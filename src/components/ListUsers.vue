<template lang="pug">
    .list
      ul
        li(v-for="user in paginated"  @click.prevent="goToUser(user)") {{user.first_name}} {{user.last_name}}

      button(@click.prevent = "prevPage", :disabled="pageNumber === 0") Prev
      button(@click.prevent = "nextPage", :disabled="pageNumber >= pageCounter -1") Next
</template>

<script>
export default {
  name: 'ListUsers',
  data() {
    return {
        pageNumber:0,
        key:''
    }
  },
  props: {

    size:{
      type:Number,
      required:false,
      default: 5
    }

  },

  computed: {
      pageCounter() {
          const length = this.listUsers.length
          const size = this.size
          return Math.ceil(length/size)
      },
      paginated() {
        const start = this.pageNumber * this.size
        const end = start + this.size

        return this.listUsers.slice(start, end)

      },
      listUsers() {
        return this.$store.getters.getUsersList
      },


  },

  created() {
  //do something after creating vue instance
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    goToUser(user) {
      this.$store.commit('SET_USER', user.id)
      this.$router.push({
        name:"User",
        params: {
          id:user.id,
          name: user.first_name + ' ' + user.last_name
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    padding: 3px 3px;
    margin-left: 0;
    border: 2px solid rgba(22, 16, 22, 0.19);
    text-align: left;
  }
  li {
    list-style-type: none;
    padding: 5px 5px;
    cursor: pointer;
  }
  li:hover{
    background-color: rgb(78, 200, 240)
  }
  li:nth-child(2n):hover{
    background-color: rgb(78, 200, 240)
  }
  li:nth-child(2n){
    background-color:#ddd;
  }
</style>
