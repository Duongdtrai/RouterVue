<template>
    <div>
        <div class="list">
            <div
                v-for="(course, index) in courses"
                :key="index"
                :class="{ selected: course.selected }"
                @click="course.selected = !course.selected"
            >
                <span>{{ course.content }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courses: [
                { content: "javascript", selected: false },
                { content: "C++", selected: false },
                { content: "java", selected: false },
                { content: "C", selected: false },
            ],
        };
    },
};
</script>

<style>
.list div {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: inline-block;
    border-radius: 10px;
    cursor: pointer;
}
.selected {
    color: white;
    background: green;
}
</style>
