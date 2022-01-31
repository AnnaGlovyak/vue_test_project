<template>
  <div>
    <Button icon="pi pi-th-large" @click="visibleLeft = true" class="p-button-rounded p-button-text" />
    <Sidebar v-model:visible="visibleLeft" :baseZIndex="1000">
      <h3>Sidebar</h3>
      <div class="sidebar-btns">
        <router-link to="/">Home</router-link>
        <router-link to="/choosen-users">Choosen users</router-link>
      </div>
    </Sidebar>
  </div>
</template>

<script>
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'

export default {
  name: 'SideBar',
  components: {
    Button,
    Sidebar
  },
  data () {
    return {
      visibleLeft: false
    }
  }
}
</script>

<style scoped>
.sidebar-btns {
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: space-around;
}
a {
  display: flex;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
    color: #5b8ed1;
}
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
