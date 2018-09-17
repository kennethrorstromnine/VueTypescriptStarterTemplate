<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <router-link :style="{ 'text-decoration': todo.completed?'line-through':''}"
        :to="{name: 'todo', params: {id: todo.id}}">{{ todo.id }} - {{ todo.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { httpService } from "@/services/http.service";

@Component({
  name: "todo-list"
})
export default class TodoList extends Vue {
  todos: any[] = [];

  mounted() {
    console.log("todo-list mounted");
    httpService.get(`https://jsonplaceholder.typicode.com/todos`).then(res => {
      console.log(res);
      this.todos = res.data.filter((e: any) => e.userId === 1);
    });
  }
}
</script>