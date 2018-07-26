<template>
<div class="skills">
    <h2>Skills:</h2>
    <form @submit.prevent="addSkill">
        <input type="text" placeholder="Add a skill..." v-model="skill"><br/>
    </form>
    <div class="row">
        <!-- <div class="offset-3 text-left"> -->
            <div v-for="(data, i) in mySkills" :key="i" class="col-2" >
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

<style scoped>
div {
  padding: 20px 0 20px 0;
}
</style>

