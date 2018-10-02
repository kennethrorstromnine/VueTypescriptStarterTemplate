<template>
  <div class="hello">
    <h2>Kalder service</h2>
    <ul>
      <li v-for="(item, index) of myList" :key="index">{{item.title}}</li>
    </ul>
  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { specificService } from "@/services/a.service";

@Component
export default class ListPosts extends Vue {

  private myList: any[] = [];

  mounted() { // Lifecycle hook

    specificService.list().then((response)=>{
      this.myList = Object.assign([], response.data);
    });

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
    min-width: 16rem;
    max-width: 45rem;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #ddd;
    border-radius: 5px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: disc;
}
li {
  margin: 0 10px;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
