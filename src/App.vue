<template>
  <div id="app" class="container">

    <b-navbar toggleable type="dark" variant="info" class="mb-4">

      <b-navbar-toggle target="navbar_collapse"></b-navbar-toggle>
      <b-navbar-brand>BootstrapVue</b-navbar-brand>

      <b-collapse is-nav id="navbar_collapse">
        <b-navbar-nav>

          <b-nav-item>
            <router-link to="/" class="nav-link">Home</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/about" class="nav-link">About</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/todo" class="nav-link">Todo</router-link>
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>

    </b-navbar>

    <router-view/>


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component<App>({})
export default class App extends Vue {}
</script>