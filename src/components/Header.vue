<template>
  <div>
    <img class='circleImg' src="@/assets/profile_pic.jpg">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
    data() {
      return {
      name: 'Samuel Poplovitch'
      }
    }
}
</script>

<style scoped>
.circleImg {
  width: 15%;
  border-radius: 100%;
  border: 1px solid gray;
  box-shadow: 0px 3px 6px lightgray;
  margin-bottom: 20px;
}
</style>
