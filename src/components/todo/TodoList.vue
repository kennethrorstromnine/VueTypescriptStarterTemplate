<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo in todos" :key="todo.id">
        <router-link :style="{ 'text-decoration': todo.completed?'line-through':''}"
        :to="{name: 'todo', params: {id: todo.id}}">{{ todo.id }} - {{ todo.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { todoService } from '@/services/todo.service';

@Component({
  name: "todo-list"
})
export default class TodoList extends Vue {
  todos: any[] = [];

  mounted() {
    console.log("todo-list mounted");
    todoService.list().then(res => {
      console.log(res);
      this.todos = res.data;
    });
  }
}
</script>