<template>
  <div>
    <h1>Liste</h1>
    <list-posts />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListPosts from "@/components/ListPosts.vue";

@Component({
  components: {
    ListPosts
  }
})
export default class Liste extends Vue {}
</script>
