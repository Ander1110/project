<template>
  <div>
    <Logo />
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import Logo from '@/components/Logo'
import NavBar from '@/components/NavBar'
export default {
  components:{
    Logo,
    NavBar
  }
}
</script>
