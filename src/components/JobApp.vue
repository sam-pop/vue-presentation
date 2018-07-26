<template>
    <div class="container add-space">
        <h1>Job search history</h1>
    <form @submit.prevent>
        <div class="input-group add-space">
            <div class="input-group-prepend center">
                <span class="input-group-text" id="">Posting</span>
                <input type="text" class="form-control" placeholder="Company name" v-model="newName">
                <input type="text" class="form-control" placeholder="Position" v-model="newPosition">
                <input type="text" class="form-control" placeholder="Posting URL" v-model="newURL">
                <button v-on:click='addPosting' class="btn btn-success">Add!</button>
            </div>
        </div>
    </form>
        <div class="row">
            <div v-for="(data, i) in jobs" :key="i" v-bind:class="{isChecked : data.noGo}">
                <div class="col add-space">
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
            ],
            newName: '',
            newPosition: '',
            newURL: ''
        }
    },
    methods: {
        addPosting() {
            if (this.newURL.includes('http') || !this.newURL)
                this.jobs.push({name: this.newName, position: this.newPosition, url: this.newURL, noGo: false});
            else 
                this.jobs.push({name: this.newName, position: this.newPosition, url: 'http://'+(this.newURL), noGo: false});
            
            this.newName = '', this.newPosition= '', this.newURL = ''; 
        }
    }
}
</script>

<style scoped>
.isChecked {
  text-decoration-line: line-through;
  color: rgba(156, 156, 156, 0.671);
}

.add-space {
  padding: 20px;
}

.center {
  margin: 0 auto;
}
</style>
