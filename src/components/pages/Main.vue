<template>
<div class="container animated slideInUp">
    <Header />
    <Bio />
    <hr />
    <skills/>
    <hr />
    <JobApp />
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
