<template>
    <div id="app">
        <router-link to = '/user'>Click</router-link>
        <router-view />























        
        <Menu />
        <div v-show="isShown">
            <h2>Phạm Tùng Dương</h2>
        </div>
        <button @click="isShown = !isShown">Ẩn/ hiện</button>
        <div v-if="isShown">
            <h2>Phạm Tùng Dương</h2>
        </div>
        <button @click="isShown = !isShown">
            <span v-if="isShown == true">Ẩn</span>
            <span v-else>Hiện</span>
        </button>

        <br /><br /><br />
        <div v-bind:id="id">Binding</div>
        <input type="text" :disabled="inputDisabled" />
        <button @click="inputDisabled = !inputDisabled">Mở/Ẩn</button>
        <br /><br /><br />

        <div :class="{ daChon: selectedRed }">Đây là thẻ màu</div>
        <button @click="selectedRed = !selectedRed">Đổi màu</button>

        <br /><br /><br />
        <form action="/ABC" @submit="doSomething()">
            <input type="text" v-model="channel.name" />
            <button type="submit" @click.prevent="channel.name = 'ABC'">
                Click
            </button>
        </form>

        <br /><br /><br />

        <input type="text" v-model="newTask" />
        <button @click="tasks.push({ content: newTask, done: false })">
            Thêm
        </button>
        <div v-for="(task, index) in tasks" v-bind:key="index" style="color:red">
            <input type="checkbox" v-model="task.done" />
            <span :class="{ done: task.done }" >
                {{ task.content }}
            </span>
        </div>

        <br /><br /><br />
        <Task v-for="(task, index) in tasks" :key="index" :taskData="task" />
        <!-- trỏ đến v-bind:taskData để đưa sang component con và sửa truyền vào props -->

        <br /><br /><br />
        {{ tongtien | dauchamphantach }}
        <button v-on:click="tongtien += 20000">Tăng tiền</button>

        <br /><br /><br />
        <SelectedCourse />

        <br><br><br>

        <input type="file" ref="inputAvatar" />
        <button v-on:click = "handleClickavatar">Thêm avatar</button>
        

    </div>
</template>

<script>

// import HelloWorld from "./components/HelloWorld.vue";
// import Menu from "./components/Menu"
import Task from "./components/Task.vue";
import SelectedCourse from "./components/SelectedCourse.vue";
export default {
    name: "App",
    components: {
        Task,
        SelectedCourse,
    },
    data() {
        // bắt buộc phải là data, chứ 1 vài thành phần
        return {
            isShown: false,
            inputDisabled: true,
            id: "abc",
            selectedRed: true,
            channel: {
                name: "Lập trình viên tại Hà Nội",
            },
            newTask: "",
            tasks: [
                { content: "Đi chợ", done: false },
                { content: "Nấu ăn", done: false },
                { content: "Code", done: false },
                { content: "Đi vệ sinh", done: false },
            ],
            tongtien: 1000000,
        };
    },
    filters: {
        dauchamphantach: function (sotien) {
            return sotien.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        },
    },
    methods: { // không dùng arrowFunction được
        // methods để chứa tất cả các hàm xử lí
        addTask: function () {
            this.tasks.push({
                content: this.newTask, // khi muốn dùng các đối tượng khác cùng trong export default thì phải dùng this để trỏ đến
                done: false,
            });
        },
        handleClickavatar: function(){
            this.$refs.inputAvatar.click();
        }
    },

    watch: {
        // để xem quá trình thay đổi của các dữ liệu trong data
        newTask: function (oldTask, newTask) { // xem được biến newTask thay đổi như nào
            console.log(oldTask);
            console.log(newTask);
            return oldTask;
        },
    },
    computed: {
        reversedMessage: function handle(oldTask) {
            console.log("Duong");
            return oldTask.reversedMessage;
        },
    },

    beforeCreate() { // nó 
        console.log("BeforeCreate ",this.isShown)
        
    },
    created() {
        
        console.log("create ",this.isShown)
    },
    beforeMount() {
        console.log("beforeMount ",this.isShown)
        
    },
    mounted() {
        console.log("mounted ",this.isShown)
        
    },
};
</script>

<style>
.daChon {
    color: red;
}
.done {
    text-decoration: line-through;
}
</style>
<!-- Note -->

<!-- /* template: Thành phần hiển thị html */ /** script: Thành phần sử lí js */ 
style: Thành phần hiển thị scss */ -->

<!-- 
Cách thực hoạt động: theo 1 vọng tròn
B1: nó lấy toàn bộ dữ liệu trong export default xong và đưa lên template
B2: render ra html, nếu có click thay đổi thì sẽ chạy xuống export default và thay đổi
B3: Sau khi thay đổi thì auto render như B1 
    => cái này được gọi là hiện tượng two Binding
-->

<!-- v-bind:[nameAtribute] = "tên đặt" 
Tác dung v-bind: dùng để xử lí việc muốn gán cái gì đó cho 1 attribute trong thẻ
-->

<!-- Mọi thứ hoạt động luôn đặt trong nháy "" (đối với v-bind:[nameElement] hoăc :[nameElement]), còn trong react thì là {} -->


<!-- v-on:[name sự kiên] = "hàm xử lí hoặc lệnh xử lí sự kiện" 
     Viết tắt: @[name sự kiện] = v-on:[name sự kiên] 
 -->


<!-- prevent Default event : hàm hủy bỏ mặc định của element như preventDefault() trong react; -->
<!-- Cách dùng: @click.prevent -->

<!--Sử dụng v-for: khi vfor đặt trong thẻ nào thì thẻ đó sẽ bằng size của array và các thành phần trong array cũng nằm trong thẻ div-->

<!--
khi dùng class hay id mà đặt tên luôn thì không cần dùng v-bind:
ngược lại muốn truyền vào thì phải dùng v-bind: -->


<!--
filters: nó là thành phần ở giữa template VÀ export default script
khi dữ liệu ở trên template thay đổi thì nó sẽ đưa xuống export default trong lúc đưa thì đi qua filters để xử lí và 
sau khi thực hiện xong exportDefault thì sẽ đẩy lên template nhưng phải sử dụng dấu | để đưa cái giá trị trong data vào filters và render
-->



<!--
computed: khi dùng computed thì nó phải return trong 1 hàm, khi nào biến trong hàm được thay đổi thì thực hiện, chỉ cần cái tên hàm là cái như biến được sử dụng, bên trong là sự thay đổi của các biến tùy vào trong hàm
watch: không cần trả về, nó chỉ có tác dụng là xem old và new 
-->



<!--
props: truyền các đối tượng từ components cha sang components con
-->

<!--
Khi muốn truyền vào 1 style thì dùng như sau: lưu ý dấu ngoặc []
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
-->

<!--
LifeCircle
beforeCreate: không lấy dữ liệu trong data (data chưa được chạy cũng như html càng chưa được render)
created: lấy dữ liệu trong data (thường dùng để gọi callAPI) ( data đang chạy và html chưa được render)
beforeMount: lấy dữ liệu trong data ( data đang chạy và html chưa được render)
mounted: lấy dữ liệu trong data. Nhưng thằng này thì mới lấy được thẻ trong html vì khi chạy đến thằng này thì lúc này html mới được kích hoạt xong
-->



<!--
v-show ="...": để thực hiện việc hiện hay ẩn
v-if = "...": nếu thỏa mãn điều kiện trong "" thì Hiện
tương tự với v-elseif và v-else
-->