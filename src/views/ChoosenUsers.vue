<template>
  <div class="users">
    <div class="toolbar-btns">
      <Button label="Clear all" icon="pi pi-trash" class="p-button-info" @click="deleteAllUsers" />
    </div>
    <DataTable :value="users" responsiveLayout="scroll" class="p-datatable-sm" :paginator="true" :rows="10" dataKey="id" >
      <Column field="id" header="id"></Column>
      <Column header="image">
        <template #body="slotProps">
          <img :src="slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
        </template>
      </Column>
      <Column field="login" header="Login">
      </Column>
      <Column :exportable="false" style="min-width:8rem">
        <template #body="slotProps">
          <Button icon="pi pi-trash" class="p-button-rounded p-button-info" @click="deleteUser(slotProps.data)" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'

export default {
  name: 'ChoosenUsers',
  components: {
    DataTable,
    Column,
    Button
  },
  data () {
    return {
      users: [],
      selectedUser: {}
    }
  },
  methods: {
    deleteAllUsers () {
      this.users.length = 0
      localStorage.removeItem('choosenUsers')
    },
    deleteUser (user) {
      this.selectedUser = user
      this.users = this.users.filter(cur => cur.id !== this.selectedUser.id)
      localStorage.setItem('choosenUsers', JSON.stringify(this.users))
    }
  },
  beforeMount () {
    const data = localStorage.getItem('choosenUsers')
    this.users = JSON.parse(data)
  }
}
</script>

<style scoped>
.toolbar-btns {
  width: 400px;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
.product-image {
  width: 100px;
}
.users {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
</style>
