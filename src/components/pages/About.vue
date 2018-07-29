<template>
<div class="container animated zoomIn">
  <!-- demo -->
  <Bio />
  <Bio />
  <Bio />
  <hr />
  <!-- router link (auto-generates the appropriate <a> tag) -->
  <router-link to='/'>Back to home</router-link>
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
