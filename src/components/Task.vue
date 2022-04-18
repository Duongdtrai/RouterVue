<template>
    <div class="task">
        {{ taskData.content }}
    </div>
</template>

<script>
export default {
    name: "TaskProps",
    props: {
        taskData: {
            type: Object,
            default: ()=>{ return {}}, // dùng default nhưng phải cùng kiểu type
        },
    },
    // props:{
    //     taskData: Object         bắt taskData là 1 object
    // } 
    
    
    // props:[
    //     'taskData'
    // ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
