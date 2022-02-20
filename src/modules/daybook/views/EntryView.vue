<template>
  <div class="justify-content-between d-flex entry-title p-2">
      <div>
          <span class="text-info fs-3 fw-bold">15</span>
          <span class="mx-1 fs-3">Julio</span>
          <span class="mx-2 fs-4 fw-light">2022, Jueves</span>
      </div>
      <div>
          <button class="btn btn-danger mx-2 border-radius">Eliminar <i class="fa fa-trash-alt"></i></button>

          <button class="btn btn-primary border-radius">Cargar Foto <i class="fa fa-upload"></i></button>
      </div>
  </div>
  <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Qué Sucedió Hoy?" class="txt-search bg-light"></textarea>
  </div>

  <Fab icon="fa-save"/>

  <img src="https://www.robertlandscapes.com/wp-content/uploads/2014/11/landscape-322100_1280.jpg" 
  alt="entry-picture" class="img-thumbnail">  

</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
    }
}
</script>

<style lang="scss" scoped>
.border-radius{
    border-radius: 50px;
    opacity: .8;
    transition: .3s ease all;
    &:hover{
        opacity: 1;
    }
}
.txt-search{
    border-radius: 0;
    border: none;
    box-shadow: 2px 5px 0px 0px rgba($color: #000, $alpha: .1);
    font-weight: 600;
    text-transform: uppercase;
    outline: none;
    height: 100%;
    padding: 10px;
}
img{
    width: 200px;
    position: fixed;
    bottom: 100px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
}
</style>