<template>
  <div>
    <van-nav-bar
      title="详情"
      left-text="返回"
      right-text="搜索"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="detail">
      <div class="block">
        <span class="demonstration">加班日期</span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">加班起始日期</span>
        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">加班结束日期</span>
        <el-date-picker
          v-model="value3"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <van-uploader :after-read="afterRead" />
      <div>

      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      file:[]
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
      this.$router.push({
        path:`/home`
      })
    },
    onClickRight() {
      Toast('搜索');
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
     this.file = file
     console.log(this.file)
    }
  }
}
</script>
<style lang="scss">


</style>


