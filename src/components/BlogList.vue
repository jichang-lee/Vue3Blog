<template>
    <div class="mt-4" v-for="(blogList , index) in data" :key="index"> 
        <router-link to="/list/detail/:id"  >
        <h5>{{blogList.title}}</h5>
        </router-link>
        <p>{{blogList.content}}</p>
    </div>    
        <!-- <div class="mt-4"> 
        <router-link to="/list/detail" >
        <h5>{{data[1].title}}</h5>
        </router-link>
        <p>{{data[1].content}}</p>
    </div>    
        <div class="mt-4"> 
        <router-link to="/list/detail" >
        <h5>{{data[2].title}}</h5>
        </router-link>
        <p>{{data[2].content}}</p>
    </div>     -->


     
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