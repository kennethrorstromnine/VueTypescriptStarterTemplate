<template>
  <div class="about">
    <h1>This is an about page</h1>
    <list-posts />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListPosts from "@/components/ListPosts.vue"; // @ is an alias to /src

@Component({
  components: {
    ListPosts,
  },
})
export default class About extends Vue {}
</script>
