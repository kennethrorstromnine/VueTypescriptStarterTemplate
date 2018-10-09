<template>
  <div>
    <p>Her vises en liste hentet fra https://jsonplaceholder.typicode.com/posts
    </p>
    <div class="lds-ripple" v-if="myList.length===0"><div></div><div></div></div>

    <b-card title="Posts">
      <ul v-if="myList.length>0">
        <li v-for="(item, index) of myList" :key="index">{{item.title}}</li>
      </ul>    
    </b-card>
  
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
<style scoped lang="scss">
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid rgb(255, 124, 36);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}

</style>
