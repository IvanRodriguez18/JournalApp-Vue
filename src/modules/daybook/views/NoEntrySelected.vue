<template>
  <div class="d-flex justify-content-center">
      <h3 class="align-self-center">No hay entrada para mostrar</h3>
  </div>
  <Fab/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    }
}
</script>


<style lang="scss" scoped>
div {
    height: 100%;
}
h3{
    color: #2C3E50;
    text-transform: uppercase;
    background-color: #F8F9FA;
    padding: 20px;
    font-weight: 700;
    text-align: center;
    width: 95%;
    border-left: 5px solid #2C3E50;
}
</style>