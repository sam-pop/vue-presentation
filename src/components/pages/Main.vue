<template>
<div class="main">
    <img class='circleImg' src="@/assets/profile_pic.jpg">
    <h1>{{ name }}</h1>
    <Bio />
    <skills/>
    <JobApp />
</div>
</template>

<script>
import Bio from '@/components/Bio'
import Skills from '@/components/Skills'
import JobApp from '@/components/JobApp'

export default {
  components: {
    Bio,
    Skills,
    JobApp
  },
  data () {
    return {
      name: 'Samuel Poplovitch'
    }
  }
}
</script>

<style>
.circleImg {
  width: 15%;
  border-radius: 100%;
  border: 1px solid gray;
  box-shadow: 0px 3px 6px lightgray;
}
</style>
