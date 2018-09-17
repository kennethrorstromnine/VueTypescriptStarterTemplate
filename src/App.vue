<template>
  <div id="app" class="container">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">ToDo</router-link>
    </div>
    <router-view/>


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component<App>({})
export default class App extends Vue {}
</script>