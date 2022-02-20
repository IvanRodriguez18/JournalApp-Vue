<template>
  <div class="entry-container pointer p-2 mb-3" @click="$router.push({ name: 'entry', params: { id: 10 } })">
      <!--Titulo-->
      <div class="entry-title d-flex">
          <span class="text-info fs-5 fw-bold">15</span>
          <span class="mx-1 fs-5">Julio</span>
          <span class="mx-2 fw-light">2022, Jueves</span>
      </div>

      <div class="entry-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, nihil incidunt fugit placeat molestiae omnis veniam suscipit itaque aliquam quod doloribus ab laboriosam minus dolor voluptas cum dicta ex rem?
      </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container{
    transition: 0.3s ease-in all;
    &:hover{
        background-color: #F8F9FA;
    }
    .entry-description{
        font-size: 12px;
    }   
}
</style>