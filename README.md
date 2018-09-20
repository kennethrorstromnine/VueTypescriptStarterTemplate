[Dansk Guide](https://github.com/kennethrorstromnine/VueTypescriptStarterTemplate/blob/master/README_DA.md)

# Vue Typescript Starter Template

A Starter template written in typescript with Vuex, REST and more

## Prerequisites

Node, npm and vue-cli is required

### Install latest version of node

```npm
    npm cache clean -f
    npm install -g n
    n lts
```

### Install latest version of vue-cli via NPM:

`npm install -g @vue/cli`

## Run it

Open up your preferred terminal and run:

`vue ui`

Under the GUI http://localhost:8000, import the folder as new project

Under tasks: http://localhost:8000/tasks run serve, when the build is finished, your should be able to click "open app"

or go to http://localhost:8080/#/

## Structure

```text
root
├── src
│    ├── components
│    ├── config
│    ├── models
│    ├── routes
│    ├── services
│    ├── utils
│    ├── views
│    ├─  forside.vue ??
├── test
```

### Componenents `/components`

reusable components

### Configs `/config`

Possible config files like:

```javascript
    // import { someConfig } from '../../config/some-config';
    someConfig.restApi
```

### Models `/models`

Models (class objects)

### Routing `/routes`

Routes used in the project

### Services `/services`

All services used by the project.

> All REST services must go through `http.service`, this is a wrapper of axios, provides get/post/put etc and sets default headers.

Please keep consistency in naming your methods in REST services like:

- get
- list/index
- create ?

### Helpers `/utils`

Helping shared utillity methods

### Views `/views`

This is the pages that is route to

### Frontpage

?

## Code

### Typescript

https://vuejs.org/v2/guide/typescript.html

#### computed and data
Is not used since this is included/part of typescript


#### Hooks
All vue hooks can be called directly in your `class`

```javascript
export default class MyComponent extends Vue {
    ...
    created(){
        // do stuff
    }

    mounted(){
        // do stuff
    }

    @Watch('myProp') onPropUpdate() {
        // do stuff
    }

    @Watch('$route') onRouteUpdate() {
        // do stuff
    }
}
```

Read more https://vuejs.org/v2/api/#Options-Lifecycle-Hooks


#### Components
When creating a vue component, your class name will be the default 'tag' name.
This can be changed by giving your component a name:

```javascript
@Component({
  name: "my-component" // <MyComponent /> will become <my-component />
})
export default class MyComponent extends Vue {
    ...
}
```

Or you could registere it globally by using `Vue.component()`

```javascript
export default class MyComponent extends Vue {
    ...
}
Vue.component('my-component', MyComponent); // <MyComponent /> will become <my-component />
```

## Bootstrap-Vue
?

## Visual Studio Code and Chrome

Visual Studio Code is the recommended coding editor

### Visual Studio Code plugins

- Vetur
- TSLint

### Chrome or Firefox

- Vue.js devtools

## Referencer

https://github.com/johnpapa/vue-heroes/tree/typescript

https://itnext.io/vuejs-and-webpack-4-from-scratch-part-1-94c9c28a534a

https://vuejsdevelopers.com/2018/03/26/vue-cli-3/

https://stackoverflow.com/questions/49176735/why-are-vue-single-file-components-preferred-to-separate-files-in-typescript

https://webdevelop.pro/vuejs-with-typescript.html

https://github.com/creationix/Nvm
