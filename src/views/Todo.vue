<template>
  <div class="row">

    <div class="col-4">
      <todo-list></todo-list>
    </div>

    <div class="col-8">
      <todo-edit v-if="$route.params.id"></todo-edit>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import TodoList from "@/components/todo/TodoList.vue"; // @ is an alias to /src
import TodoEdit from "@/components/todo/TodoEdit.vue"; // @ is an alias to /src

@Component({
  components: {
    TodoList,
    TodoEdit
  }
})
export default class Todo extends Vue {
  todoId: string = "";

  created() {
    console.log("created");
  }

  // @Watch("$route", { immediate: true })
  // loadTodo() {
  //   this.todoId = this.$route.params.id;
  // }
}
</script>
