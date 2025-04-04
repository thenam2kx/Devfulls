const adobeXd = 'http://localhost:3000/svg/skills/adobe-xd.svg'
const adobeaudition = 'http://localhost:3000/svg/skills/adobeaudition.svg'
const afterEffects = 'http://localhost:3000/svg/skills/after-effects.svg'
const angular = 'http://localhost:3000/svg/skills/angular.svg'
const aws = 'http://localhost:3000/svg/skills/aws.svg'
const azure = 'http://localhost:3000/svg/skills/azure.svg'
const blender = 'http://localhost:3000/svg/skills/blender.svg'
const bootstrap = 'http://localhost:3000/svg/skills/bootstrap.svg'
const bulma = 'http://localhost:3000/svg/skills/bulma.svg'
const c = 'http://localhost:3000/svg/skills/c.svg'
const canva = 'http://localhost:3000/svg/skills/canva.svg'
const capacitorjs = 'http://localhost:3000/svg/skills/capacitorjs.svg'
const coffeescript = 'http://localhost:3000/svg/skills/coffeescript.svg'
const cplusplus = 'http://localhost:3000/svg/skills/cplusplus.svg'
const csharp = 'http://localhost:3000/svg/skills/csharp.svg'
const css = 'http://localhost:3000/svg/skills/css.svg'
const dart = 'http://localhost:3000/svg/skills/dart.svg'
const deno = 'http://localhost:3000/svg/skills/deno.svg'
const django = 'http://localhost:3000/svg/skills/django.svg'
const docker = 'http://localhost:3000/svg/skills/docker.svg'
const fastify = 'http://localhost:3000/svg/skills/fastify.svg'
const figma = 'http://localhost:3000/svg/skills/figma.svg'
const firebase = 'http://localhost:3000/svg/skills/firebase.svg'
const flutter = 'http://localhost:3000/svg/skills/flutter.svg'
const gcp = 'http://localhost:3000/svg/skills/gcp.svg'
const gimp = 'http://localhost:3000/svg/skills/gimp.svg'
const git = 'http://localhost:3000/svg/skills/git.svg'
const go = 'http://localhost:3000/svg/skills/go.svg'
const graphql = 'http://localhost:3000/svg/skills/graphql.svg'
const haxe = 'http://localhost:3000/svg/skills/haxe.svg'
const html = 'http://localhost:3000/svg/skills/html.svg'
const illustrator = 'http://localhost:3000/svg/skills/illustrator.svg'
const ionic = 'http://localhost:3000/svg/skills/ionic.svg'
const java = 'http://localhost:3000/svg/skills/java.svg'
const javascript = 'http://localhost:3000/svg/skills/javascript.svg'
const julia = 'http://localhost:3000/svg/skills/julia.svg'
const kotlin = 'http://localhost:3000/svg/skills/kotlin.svg'
const lightroom = 'http://localhost:3000/svg/skills/lightroom.svg'
const markdown = 'http://localhost:3000/svg/skills/markdown.svg'
const materialui = 'http://localhost:3000/svg/skills/materialui.svg'
const matlab = 'http://localhost:3000/svg/skills/matlab.svg'
const memsql = 'http://localhost:3000/svg/skills/memsql.svg'
const microsoftoffice = 'http://localhost:3000/svg/skills/microsoftoffice.svg'
const mongoDB = 'http://localhost:3000/svg/skills/mongoDB.svg'
const mysql = 'http://localhost:3000/svg/skills/mysql.svg'
const nextJS = 'http://localhost:3000/svg/skills/nextJS.svg'
const nginx = 'http://localhost:3000/svg/skills/nginx.svg'
const numpy = 'http://localhost:3000/svg/skills/numpy.svg'
const nuxtJS = 'http://localhost:3000/svg/skills/nuxtJS.svg'
const opencv = 'http://localhost:3000/svg/skills/opencv.svg'
const photoshop = 'http://localhost:3000/svg/skills/photoshop.svg'
const php = 'http://localhost:3000/svg/skills/php.svg'
const picsart = 'http://localhost:3000/svg/skills/picsart.svg'
const postgresql = 'http://localhost:3000/svg/skills/postgresql.svg'
const premierepro = 'http://localhost:3000/svg/skills/premierepro.svg'
const python = 'http://localhost:3000/svg/skills/python.svg'
const pytorch = 'http://localhost:3000/svg/skills/pytorch.svg'
const react = 'http://localhost:3000/svg/skills/react.svg'
const ruby = 'http://localhost:3000/svg/skills/ruby.svg'
const selenium = 'http://localhost:3000/svg/skills/selenium.svg'
const sketch = 'http://localhost:3000/svg/skills/sketch.svg'
const strapi = 'http://localhost:3000/svg/skills/strapi.svg'
const svelte = 'http://localhost:3000/svg/skills/svelte.svg'
const swift = 'http://localhost:3000/svg/skills/swift.svg'
const tailwind = 'http://localhost:3000/svg/skills/tailwind.svg'
const tensorflow = 'http://localhost:3000/svg/skills/tensorflow.svg'
const typescript = 'http://localhost:3000/svg/skills/typescript.svg'
const unity = 'http://localhost:3000/svg/skills/unity.svg'
const vitejs = 'http://localhost:3000/svg/skills/vitejs.svg'
const vue = 'http://localhost:3000/svg/skills/vue.svg'
const vuetifyjs = 'http://localhost:3000/svg/skills/vuetifyjs.svg'
const webix = 'http://localhost:3000/svg/skills/webix.svg'
const wolframalpha = 'http://localhost:3000/svg/skills/wolframalpha.svg'
const wordpress = 'http://localhost:3000/svg/skills/wordpress.svg'

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase()
  switch (skillID) {
  case 'gcp':
    return gcp
  case 'html':
    return html
  case 'photoshop':
    return photoshop
  case 'docker':
    return docker
  case 'illustrator':
    return illustrator
  case 'adobe xd':
    return adobeXd
  case 'after effects':
    return afterEffects
  case 'css':
    return css
  case 'angular':
    return angular
  case 'javascript':
    return javascript
  case 'next js':
    return nextJS
  case 'nuxt js':
    return nuxtJS
  case 'react':
    return react
  case 'svelte':
    return svelte
  case 'typescript':
    return typescript
  case 'vue':
    return vue
  case 'bootstrap':
    return bootstrap
  case 'bulma':
    return bulma
  case 'capacitorjs':
    return capacitorjs
  case 'coffeescript':
    return coffeescript
  case 'memsql':
    return memsql
  case 'mongodb':
    return mongoDB
  case 'mysql':
    return mysql
  case 'postgresql':
    return postgresql
  case 'tailwind':
    return tailwind
  case 'vitejs':
    return vitejs
  case 'vuetifyjs':
    return vuetifyjs
  case 'c':
    return c
  case 'c++':
    return cplusplus
  case 'c#':
    return csharp
  case 'dart':
    return dart
  case 'go':
    return go
  case 'java':
    return java
  case 'kotlin':
    return kotlin
  case 'julia':
    return julia
  case 'matlab':
    return matlab
  case 'php':
    return php
  case 'python':
    return python
  case 'ruby':
    return ruby
  case 'swift':
    return swift
  case 'adobe audition':
    return adobeaudition
  case 'aws':
    return aws
  case 'deno':
    return deno
  case 'django':
    return django
  case 'firebase':
    return firebase
  case 'gimp':
    return gimp
  case 'git':
    return git
  case 'graphql':
    return graphql
  case 'lightroom':
    return lightroom
  case 'materialui':
    return materialui
  case 'nginx':
    return nginx
  case 'numpy':
    return numpy
  case 'opencv':
    return opencv
  case 'premiere pro':
    return premierepro
  case 'pytorch':
    return pytorch
  case 'selenium':
    return selenium
  case 'strapi':
    return strapi
  case 'tensorflow':
    return tensorflow
  case 'webix':
    return webix
  case 'wordpress':
    return wordpress
  case 'azure':
    return azure
  case 'blender':
    return blender
  case 'fastify':
    return fastify
  case 'figma':
    return figma
  case 'flutter':
    return flutter
  case 'haxe':
    return haxe
  case 'ionic':
    return ionic
  case 'markdown':
    return markdown
  case 'microsoft office':
    return microsoftoffice
  case 'picsart':
    return picsart
  case 'sketch':
    return sketch
  case 'unity':
    return unity
  case 'wolframalpha':
    return wolframalpha
  case 'canva':
    return canva
  default:
    break
  }
}