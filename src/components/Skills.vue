<template>
<div class="skills">
    <h2>Skills</h2>
    <!-- prevents default form action (submit) and execture the addSkill method instead-->
    <form @submit.prevent="addSkill" class="input-group-text col-4">
        <!-- v-model is a two way binding for form inputs (binds the form to the skill variable) -->
        <input type="text" placeholder="Add a skill..." v-model="skill"><br/>
    </form>
    <div class="row">
            <!-- v-for generates a for-loop to iterate over the array -->
            <!-- :key assigns a unique-key (id) to each element (based on passed array index) -->
            <!-- v-bind:id binds the button id to the array index -->
            <!-- @click executes the removeSkill method on-mouse-click -->
            <div v-for="(data, i) in mySkills" :key="i" class="col-2 animated bounceIn" >
                <button v-bind:id='i' @click="removeSkill(i)" class="btn btn-sm btn-dark">x</button>
                {{data.name}}
            </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            mySkills: [
                {'name':'Vue.js'},
                {'name':'JavaScript'}
            ],
            skill: ''
        }
    },
    methods: {
        addSkill(){
            this.mySkills.push({name : this.skill});
            this.skill = '';
        },
        removeSkill(index){
            this.mySkills.splice(index, 1);
        }
    }
}
</script>

<!-- "scoped" attribute limit CSS to this component only -->
<style scoped>
div {
  padding: 20px 0 20px 0;
}

h2 {
  padding-bottom: 10px;
}
form {
  margin: 0 auto;
}
input {
  width: 100%;
}
</style>

