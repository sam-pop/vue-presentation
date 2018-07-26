<template>
    <div class="container">
        <h1>jobApp</h1>
        <div class="row">
            <div v-for="(data, i) in jobs" :key="i" v-bind:class="{isChecked : data.noGo}">
                <div class="col">
                    <input type="checkbox" class="toggle" v-model="data.noGo"><br/> 
                    <span style='font-size:2em;'>{{data.name}}</span>
                        <br/>
                    <span style='font-size:1.5em;'>{{data.position}}</span><br/>
                    <span v-if="data.url">
                        <a v-bind:href='data.url' target="_blank">(Link to position)</a> 
                    </span>
                    <br/><br/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {'name': 'Facebook', 'position':'Vue Developer', 'url' : 'http://www.google.com', 'noGo' : false},
                {'name': 'Google', 'position':'React Developer', 'url' : '', 'noGo' : false}
            ]
        }
    }    
}
</script>

<style scoped>
.isChecked {
  text-decoration-line: line-through;
  color: red;
}
</style>
