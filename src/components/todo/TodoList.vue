<template>
  <div>
    <h4>Din Huskeliste</h4>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo in $store.getters.allTodos" :key="todo.id">
        <router-link :style="{ 'text-decoration': todo.completed?'line-through':''}"
        :to="{name: 'todo', params: {id: todo.id}}">{{ todo.title }}</router-link>
      </li>
      <li class="list-group-item add-todo">
          <router-link :to="{name: 'todo', params: {id:'new'}}">
            <span class="oi oi-plus"></span>
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store/store";

@Component({
  name: "todo-list"
})
export default class TodoList extends Vue {
  created() {
    store.dispatch("FETCH_TODOS");
  }
}
</script>

<style lang="scss" scoped>
.add-todo {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.03);
  a {
    display: block;
    color:  rgb(23, 162, 184);
  }
}
</style>
