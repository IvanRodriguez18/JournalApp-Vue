<template>
  <button class="btn btn-primary">
      <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>
button{
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    font-size: 14px;
    font-weight: bold;
    transition: .3s ease-in all;
    &:hover{
        box-shadow: 0px 0px 50px rgba($color: #000000, $alpha: 0.8);
        transform: rotate(360deg);
    }
}
</style>