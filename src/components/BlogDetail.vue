<template>
    
    <div>
        <h4>상세페이지</h4>
        <h5>{{data[$route.params.id].title}}</h5>
        <p>{{data[$route.params.id].content}}</p>
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