<template>
    <div v-for="(blog , index) in data" :key="index">
        <h5>{{blog[0].title}}</h5>
        
        <p>{{blog[0].content}} </p>    
    </div>    
</template>

<script setup>
import { defineProps } from 'vue';

const data = defineProps({
  data: {
    Type: Array,
   default: () => ({}),
  },
})

</script>