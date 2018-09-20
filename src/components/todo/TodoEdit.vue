<template>
  <div class="card">
    <div class="card-header">
      Edit Todo
    </div>

    <div v-if="loading" class="card-body">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    <div v-else class="card-body">

      <label>Created by:</label>
      {{ todo.author }}

      <div class="form-check">
        <input id="todo-completed" type="checkbox" class="form-check-input" v-model="todo.completed">
        <label class="form-check-label" for="todo-completed">Completed</label>
      </div>
      <br>
      <div class="form-group">
        <label for="todo-title">Title</label>
        <input id="todo-title" type="text" class="form-control" v-model="todo.title">
      </div>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary float-right ml-2" @click="saveTodo">Save</button>
      <button class="btn btn-secondary float-right" :disabled="!todo.id" @click="deleteTodo">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { todoService } from "@/services/todo.service";
import store from "@/store";

@Component({
  name: "todo-edit"
})
export default class ToDoListComponent extends Vue {
  private todoId!: any;
  private todo: any = {};
  private loading: boolean = false;

  @Watch("$route.params.id", { immediate: true })
  loadTodo() {
    this.todoId = this.$route.params.id;
    if (this.todoId === "new") {
      this.todo = {
        author: "User",
        title: "",
        completed: false
      };
    } else {
      this.loading = true;
      todoService
        .get(this.todoId)
        .then(res => {
          this.todo = res.data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }

  saveTodo() {
    todoService.save(this.todo).then(res => {
      store.dispatch("FETCH_TODOS");
      this.$router.push({ params: { id: res.data.id } });
    });
  }

  deleteTodo() {
    todoService.delete(this.todo.id).then(() => {
      store.dispatch("FETCH_TODOS").then(res => {
        this.$router.push({
          params: { id: this.$store.getters.firstTodo.id }
        });
      });
    });
  }
}
</script>
