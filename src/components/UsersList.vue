<template>
  <div class="users">
    <DataTable :value="users" responsiveLayout="scroll" class="p-datatable-sm" :paginator="true" :rows="10" v-model:selection="user" selectionMode="single" @rowSelect="onRowSelect" dataKey="id" >
      <Column>
        <template #body="slotProps">
          <Checkbox :value="slotProps.data" :id="slotProps.data.id" v-model="selectedUsers" />
        </template>
      </Column>
      <Column field="id" header="id"></Column>
      <Column header="image">
        <template #body="slotProps">
          <img :src="slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
        </template>
      </Column>
      <Column field="login" header="Login"></Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Checkbox from 'primevue/checkbox'

export default {
  name: 'UsersList',
  components: {
    DataTable,
    Column,
    Checkbox
  },
  props: ['users'],
  data () {
    return {
      selectedUsers: null,
      user: null
    }
  },
  methods: {
    onRowSelect () {
      console.log('selected')
      this.$router.push({
        name: 'UserInfo',
        params: { login: this.user.login }
      })
    }
  },
  beforeUnmount () {
    if (this.selectedUsers !== null) {
      localStorage.setItem('choosenUsers', JSON.stringify(this.selectedUsers))
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.users {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
.product-image {
  width: 100px;
}
</style>
