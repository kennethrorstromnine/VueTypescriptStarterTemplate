<template>
  <div v-if="todo" class="card">
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
      <button class="btn btn-secondary float-right" @click="deleteTodo">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { httpService } from "@/services/http.service";
import { todoService } from '@/services/todo.service';

@Component({
  name: "todo-edit"
})
export default class ToDoListComponent extends Vue {
  @Prop({ required: true })
  private todoId!: any;
  private todo: any = {};
  private loading: boolean = false;

  @Watch("todoId", { immediate: true })
  loadTodo() {
    if (this.todoId === 'new'){
      this.todo = {
        author: "User",
        title: "",
        completed: false
      }
    } else {
      this.loading = true;
      todoService.get(this.todoId).then(res => {
          this.todo = res.data;
        }).finally( () => { this.loading = false});
    }
  }

  saveTodo(){
    todoService.save(this.todo).then(res => this.$router.go(this.$router.currentRoute) )
  }

  deleteTodo(){
    todoService.delete(this.todo.id).then(res => this.$router.go(this.$router.currentRoute) )
  }
}
</script>