<template>
<div><div>{{res}}</div><el-button @click="get">gggg</el-button></div>
  

</template>

<script>
import {
  get
  // getListByCat,
} from "@/api/model/save";
export default {
  data() {
    return {
      res:''
    }
  },
  methods:{
    get(){
      get().then(
      res=>{
        console.log(`output->res`,res)
        this.res=res
      }
    )
    }
  },
  created(){
    
  }
}
</script>

<style>

</style>