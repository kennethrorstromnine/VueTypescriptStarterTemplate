# Vue Typescript Starter Template
Vue.js starter template med typescript med vue-router, vuex og axios (http client).

## Forudsætninger
_**Hvis man allerde har installeret Node, kan denne sektion springes over**_

Node og npm nødvendige forudsætninger for at komme i gang med udviklingen. Vi anbefaler at disse installeres med nvm (Node Version Manager) da det giver mulighed for at køre flere forskellige versioner af node og npm.

Dokumentation kan findes på: https://github.com/creationix/Nvm

``` bash
// installer nvm og følg vejledningen
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Check at nvm er installeret korrekt med at køre
``` bash
$ nvm

// skulle gerne producere følgende output
Node Version Manager

Note: <version> refers to any version-like string nvm understands. This includes:
  - full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)
  - default (built-in) aliases: node, stable, unstable, iojs, system
  - custom aliases you define with `nvm alias foo`

 Any options that produce colorized output should respect the `--no-colors` option.

Usage:
  nvm --help
  ...
```

Installer den seneste version af Node
``` bash
$ nvm install --lts
```

Med installation af Node kommer npm automatisk med.

### Vue UI
Vi har valgt at gøre brug af @vue/cli som giver os en GUI til det meste af vores konfiguration af vue samt muligheden for at oprette ny projekter på sigt.

#### Installer vue-cli:
``` bash
// installer @vue/cli globalt så vi kan bruge den overalt
$ npm install -g @vue/cli
```

Åben en terminal og kør nedenstående kommando for at starte GUI'en op:

``` bash
$ vue ui
```

Åben http://localhost:8000 i en browser og importer dette starter projekt.

NB: *Hvis ikke importer knappen er synlig skal man trykke på "huset" nede i venstre hjørne.*

Vælg "tasks" i venstre menuen og dernæst "serve". Start tasken ved at klikke på "Run task" og når den er færdig kan applikationen åbnes ved at trykke på "Open app" eller ved at gå til http://localhost:8080/#/

Hvis kan du kan se teksten "Welcome to Your Vue.js + TypeScript App" har du nu konfigureret din maskine korrekt.

## Filstruktur
Der findes ikke nogen standard måde at strukture eller navngive sine filer på men vi ligger op til at man følger nedenstående struktur som standard.

```text
root
├── src
│    ├── components
│        ├── AComponent.vue
│        ├── BComponent.vue
│    ├── config
│        ├── config.ts
│    ├── models
│        ├── models.ts
│    ├── routes
│        ├── routes.ts
│    ├── services
│        ├── my.service.ts
│    ├── store
│        ├── store.ts
│    ├── utils
│    ├── views
│        ├─  About.vue
│        ├─  Home.vue
│    ├─  Forside.vue ??
│    ├─  main.ts ??
├── test
```

For så vidt muligt anbefaler vi at man følger den officielle style guide:

https://vuejs.org/v2/style-guide/

### Componenents `/components`

Genbrugelige komponenter

### Configs `/config`

Mulige konfigurations filer så som:

```javascript
    // import { someConfig } from '../../config/some-config';
    someConfig.restApi
```

### Models `/models`

Delte modeller (class/interface objekter)

### Routing `/routes`

Router som bliver brugt i projektet.

### Services `/services`

Services som bliver brugt i projektet.

> Alle REST services skal bruge `http.service`, en wrapper til axios som tilbyder gængse http metoder og sætter default headers

Det er en god skik at være konsistent i navngivning af sine metoder i REST services:
- get
- list/index
- create ?

### Helpers `/utils`

Hjælpe klasser til generiske metoder

### Views `/views`

Hovedsider som router kan navigere til

### Frontpage

Forsiden af vores applikation

## Vue med typescript
https://vuejs.org/v2/guide/typescript.html

### Komponenter
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

### Lifecycle hooks
Alle vue hooks kan blive kaldt direkte i klassen

```javascript
export default class MyComponent extends Vue {
    ...
    created(){
        // do stuff
    }

    mounted(){
        // do stuff
    }

    updated(){
        // do stuff
    }

    destroyed(){
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

Læs mere https://vuejs.org/v2/api/#Options-Lifecycle-Hooks

## Bootstrap-Vue
Vue komponent bibliotek som wrapper bootstrap til Vue. Grunden til dette skyldes primært at vi derved kan undgå at inkludere jquery i vores applikation.

https://bootstrap-vue.js.org/

## Visual Studio Code and Chrome

Vi anbefaler man bruger Visual Studio Code da den har sublime understøttelse af typescript.

### Anbefalede Visual Studio Code plugins

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