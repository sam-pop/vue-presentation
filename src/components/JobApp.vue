<template>
    <div class="container add-space">
        <h1>Applied positions history</h1>
        <!-- prevents default form action (submit) -->
        <form @submit.prevent>
            <div class="input-group add-space">
                <div class="input-group-prepend center">
                    <span class="input-group-text" id="">Posting</span>
                    <input type="text" class="form-control" placeholder="Company name" v-model="newName">
                    <input type="text" class="form-control" placeholder="Position" v-model="newPosition">
                    <input type="text" class="form-control" placeholder="Posting URL" v-model="newURL">
                    <!-- v-on:click adds an event listener for button click -> executes the defined function -->
                    <button v-on:click='addPosting' class="btn btn-success">Add!</button>
                </div>
            </div>
        </form>
        <div class="row">
            <!-- v-for generates a for-loop to iterate over the array -->
            <!-- :key assigns a unique-key (id) to each element (based on passed array index) -->
            <!-- v-bind:class adds the isChecked class to the div element if data.noGo is true -->
            <div v-for="(data, i) in jobs" :key="i" v-bind:class="{isChecked : data.noGo}">
                <div class="col add-space">
                    <!-- v-model is a two way binding for form inputs (binds the form to the data.noGo variable)-->
                    <input type="checkbox" class="toggle" v-model="data.noGo"><br/> 
                    <span style='font-size:2em;'>{{data.name}}</span>
                        <br/>
                    <span style='font-size:1.5em;'>{{data.position}}</span><br/>
                    <!-- v-if is uses to create the <a> tag (link) if the condition is met (data.url exists) -->
                    <span v-if="data.url">
                        <!-- v-bind is used here to `bind` the url in data.url to the href attribute -->
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
            // jobs objects array
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
        // adds a new posting to the posting list
        addPosting() {
            if (this.newURL.includes('http') || !this.newURL)
                this.jobs.push({name: this.newName, position: this.newPosition, url: this.newURL, noGo: false});
            else 
                this.jobs.push({name: this.newName, position: this.newPosition, url: 'http://'+(this.newURL), noGo: false});
            // zero-out the input fields
            this.newName = '', this.newPosition= '', this.newURL = ''; 
        }
    }
}
</script>

<!-- "scoped" attribute limit CSS to this component only -->
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
