<template>
  <div>
    加班
  </div>
</template>
<script>
export default {
  data() {
    return {
      carList:[]
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get('/api/shop').then(res=>{
        this.carList=res.data.list.data.list;
        
      })
    }
  },
}
</script>