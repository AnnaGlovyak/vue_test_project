<template>
  <div class="home">
    <h3>All users</h3>
    <UsersList :users="usersList"/>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'Home',
  components: {
    UsersList
  },
  mounted () {
    this.$store.dispatch('setUsers')
  },
  computed: {
    usersList () {
      return this.$store.getters.getUsers
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 10px;
}
</style>
