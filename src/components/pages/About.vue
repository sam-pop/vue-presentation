<template>
<div class="container animated zoomIn">
  <!-- for demo only -->
    <Bio />
    <Bio />
    <Bio />
    <hr />
    <router-link to='/'>
    Back to home
    </router-link>
</div>
</template>

<script>
import Header from '@/components/Header'
import Bio from '@/components/Bio'
import Skills from '@/components/Skills'
import JobApp from '@/components/JobApp'

export default {
  components: {
    Header,
    Bio,
    Skills,
    JobApp
  },
  data () {
    return {
    }
  }
}
</script>

<style>
body {
  background-color: azure;
}

hr {
  width: 50%;
}
</style>
