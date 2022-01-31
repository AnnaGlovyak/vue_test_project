<template>
  <div class="user-page">
    <div class="user-info">
      <Card style="width: 40em">
        <template #header>
          <img :src="user?.avatar" style="width: 20rem" />
        </template>
        <template #title>
          {{ user?.name }}
        </template>
        <template #subtitle>
          {{ user?.login }}
        </template>
        <template #content>
          <p>Location: {{ user?.location }}</p>
          <p>Created date: {{ user?.createdDate }}</p>
          <p>Public repos: {{ user?.publicRepos }}</p>
          <p>Followers: {{ user?.followers }}</p>
        </template>
        <template #footer>
          <Button label="Back" @click="backHome"/>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from 'primevue/card'
import Button from 'primevue/button'

export default {
  name: 'UserInfo',
  components: {
    Card, Button
  },
  data () {
    return {
    }
  },
  props: {
    login: String
  },
  methods: {
    backHome () {
      this.$router.push({ path: '/' })
    }
  },
  mounted () {
    this.$store.dispatch('setUserInfo', this.$props.login)
  },
  computed: {
    user () {
      return this.$store.getters.getUserInfo
    }
  }
}
</script>

<style scoped>
.user-page {
  margin: 20px auto;
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.p-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
