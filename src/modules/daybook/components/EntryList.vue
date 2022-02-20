<template>
    <div class="entry-list-container">
        <div class="py-2">
            <input type="text" name="" class="form-control txt-search bg-light" placeholder="Buscar Entrada">
        </div>
        <div class="entry-scrollarea mt-2">
            <Entry v-for="item in 50" :key="item"/>
        </div>
    </div>
</template>

<script>
import {defineAsyncComponent}  from 'vue'

export default {
    components: {
        Entry: defineAsyncComponent( () => import('../components/Entry.vue') )
    },
}
</script>


<style lang="scss" scoped>
.txt-search{
    border-radius: 0;
    border: none;
    box-shadow: 2px 5px 0px 0px rgba($color: #000, $alpha: .1);
    font-weight: 600;
    text-transform: uppercase;
}
.entry-scrollarea{
    overflow: scroll;
    height: calc(100vh - 120px);
}
.entry-scrollarea::-webkit-scrollbar {
  width: 8px;
}
.entry-scrollarea::-webkit-scrollbar{
    background: none;
}
.entry-scrollarea::-webkit-scrollbar-thumb{
    background-color: #cfcfcf;
    border-radius: 10px;
}
</style>