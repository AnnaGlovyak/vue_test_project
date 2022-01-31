<template>
  <div>
    <Menubar>
      <template #start>
        <SideBar />
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </Menubar>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'Header',
  components: {
    Menubar,
    InputText,
    SideBar
  }
}
</script>
