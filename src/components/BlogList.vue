<template>
    <div class="mt-4" v-for="(blogList , index) in data" :key="index"> 
        <router-link :to="`/list/detail/${index}`"  >
        <h5>{{blogList.title}}</h5>
        </router-link>
        <p>{{blogList.content}}</p>
    </div>    
       


     
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  data: {
    type: Object,
   default: ()=>{},
  },
})

</script>