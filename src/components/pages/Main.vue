<template>
  <div class="container animated slideInUp">
    <Header />
    <Bio />
    <hr />
    <skills/>
    <hr />
    <JobApp />
    <hr />
    <!-- router link (auto-generates the appropriate <a> tag) -->
    <router-link to='/about'>
      Click here for more info
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
