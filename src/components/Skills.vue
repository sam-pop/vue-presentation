<template>
<div class="skills">
    <h1>skills</h1>
    <form @submit.prevent="addSkill">
        <input type="text" placeholder="Add a skill..." v-model="skill"><br/>
    </form>
    <ul>
        <li v-for="(data, i) in mySkills" :key="i">{{data.name}} <button v-bind:id='i' @click="removeSkill(i)">X</button></li>
    </ul>
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
