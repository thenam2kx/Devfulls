// import adobeXd from '/svg/skills/adobe-xd.svg'
// import adobeaudition from '/svg/skills/adobeaudition.svg'
// import afterEffects from '/svg/skills/after-effects.svg'
// import angular from '/svg/skills/angular.svg'
// import aws from '/svg/skills/aws.svg'
// import azure from '/svg/skills/azure.svg'
// import blender from '/svg/skills/blender.svg'
// import bootstrap from '/svg/skills/bootstrap.svg'
// import bulma from '/svg/skills/bulma.svg'
// import c from '/svg/skills/c.svg'
// import canva from '/svg/skills/canva.svg'
// import capacitorjs from '/svg/skills/capacitorjs.svg'
// import coffeescript from '/svg/skills/coffeescript.svg'
// import cplusplus from '/svg/skills/cplusplus.svg'
// import csharp from '/svg/skills/csharp.svg'
// import css from '/svg/skills/css.svg'
// import dart from '/svg/skills/dart.svg'
// import deno from '/svg/skills/deno.svg'
// import django from '/svg/skills/django.svg'
// import docker from '/svg/skills/docker.svg'
// import fastify from '/svg/skills/fastify.svg'
// import figma from '/svg/skills/figma.svg'
// import firebase from '/svg/skills/firebase.svg'
// import flutter from '/svg/skills/flutter.svg'
// import gcp from '/svg/skills/gcp.svg'
// import gimp from '/svg/skills/gimp.svg'
// import git from '/svg/skills/git.svg'
// import go from '/svg/skills/go.svg'
// import graphql from '/svg/skills/graphql.svg'
// import haxe from '/svg/skills/haxe.svg'
// import html from '/svg/skills/html.svg'
// import illustrator from '/svg/skills/illustrator.svg'
// import ionic from '/svg/skills/ionic.svg'
// import java from '/svg/skills/java.svg'
// import javascript from '/svg/skills/javascript.svg'
// import julia from '/svg/skills/julia.svg'
// import kotlin from '/svg/skills/kotlin.svg'
// import lightroom from '/svg/skills/lightroom.svg'
// import markdown from '/svg/skills/markdown.svg'
// import materialui from '/svg/skills/materialui.svg'
// import matlab from '/svg/skills/matlab.svg'
// import memsql from '/svg/skills/memsql.svg'
// import microsoftoffice from '/svg/skills/microsoftoffice.svg'
// import mongoDB from '/svg/skills/mongoDB.svg'
// import mysql from '/svg/skills/mysql.svg'
// import nextJS from '/svg/skills/nextJS.svg'
// import nginx from '/svg/skills/nginx.svg'
// import numpy from '/svg/skills/numpy.svg'
// import nuxtJS from '/svg/skills/nuxtJS.svg'
// import opencv from '/svg/skills/opencv.svg'
// import photoshop from '/svg/skills/photoshop.svg'
// import php from '/svg/skills/php.svg'
// import picsart from '/svg/skills/picsart.svg'
// import postgresql from '/svg/skills/postgresql.svg'
// import premierepro from '/svg/skills/premierepro.svg'
// import python from '/svg/skills/python.svg'
// import pytorch from '/svg/skills/pytorch.svg'
// import react from '/svg/skills/react.svg'
// import ruby from '/svg/skills/ruby.svg'
// import selenium from '/svg/skills/selenium.svg'
// import sketch from '/svg/skills/sketch.svg'
// import strapi from '/svg/skills/strapi.svg'
// import svelte from '/svg/skills/svelte.svg'
// import swift from '/svg/skills/swift.svg'
// import tailwind from '/svg/skills/tailwind.svg'
// import tensorflow from '/svg/skills/tensorflow.svg'
// import typescript from '/svg/skills/typescript.svg'
// import unity from '/svg/skills/unity.svg'
// import vitejs from '/svg/skills/vitejs.svg'
// import vue from '/svg/skills/vue.svg'
// import vuetifyjs from '/svg/skills/vuetifyjs.svg'
// import webix from '/svg/skills/webix.svg'
// import wolframalpha from '/svg/skills/wolframalpha.svg'
// import wordpress from '/svg/skills/wordpress.svg'

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase()
  switch (skillID) {
  case 'gcp':
    return '/svg/skills/gcp.svg'
  case 'html':
    return '/svg/skills/html.svg'
  case 'photoshop':
    return '/svg/skills/photoshop.svg'
  case 'docker':
    return '/svg/skills/docker.svg'
  case 'illustrator':
    return '/svg/skills/illustrator.svg'
  case 'adobe xd':
    return '/svg/skills/adobe-xd.svg'
  case 'after effects':
    return '/svg/skills/after-effects.svg'
  case 'css':
    return '/svg/skills/css.svg'
  case 'angular':
    return '/svg/skills/angular.svg'
  case 'javascript':
    return '/svg/skills/javascript.svg'
  case 'next js':
    return '/svg/skills/nextJS.svg'
  case 'nuxt js':
    return '/svg/skills/nuxtJS.svg'
  case 'react':
    return '/svg/skills/react.svg'
  case 'svelte':
    return '/svg/skills/svelte.svg'
  case 'typescript':
    return '/svg/skills/typescript.svg'
  case 'vue':
    return '/svg/skills/vue.svg'
  case 'bootstrap':
    return '/svg/skills/bootstrap.svg'
  case 'bulma':
    return '/svg/skills/bulma.svg'
  case 'capacitorjs':
    return '/svg/skills/capacitorjs.svg'
  case 'coffeescript':
    return '/svg/skills/coffeescript.svg'
  case 'memsql':
    return '/svg/skills/memsql.svg'
  case 'mongodb':
    return '/svg/skills/mongoDB.svg'
  case 'mysql':
    return '/svg/skills/mysql.svg'
  case 'postgresql':
    return '/svg/skills/postgresql.svg'
  case 'tailwind':
    return '/svg/skills/tailwind.svg'
  case 'vitejs':
    return '/svg/skills/vitejs.svg'
  case 'vuetifyjs':
    return '/svg/skills/vuetifyjs.svg'
  // case 'c':
  //   return c
  // case 'c++':
  //   return cplusplus
  // case 'c#':
  //   return csharp
  // case 'dart':
  //   return dart
  // case 'go':
  //   return go
  // case 'java':
  //   return java
  // case 'kotlin':
  //   return kotlin
  // case 'julia':
  //   return julia
  // case 'matlab':
  //   return matlab
  // case 'php':
  //   return php
  // case 'python':
  //   return python
  // case 'ruby':
  //   return ruby
  // case 'swift':
  //   return swift
  // case 'adobe audition':
  //   return adobeaudition
  // case 'aws':
  //   return aws
  // case 'deno':
  //   return deno
  // case 'django':
  //   return django
  // case 'firebase':
  //   return firebase
  // case 'gimp':
  //   return gimp
  // case 'git':
  //   return git
  // case 'graphql':
  //   return graphql
  // case 'lightroom':
  //   return lightroom
  // case 'materialui':
  //   return materialui
  // case 'nginx':
  //   return nginx
  // case 'numpy':
  //   return numpy
  // case 'opencv':
  //   return opencv
  // case 'premiere pro':
  //   return premierepro
  // case 'pytorch':
  //   return pytorch
  // case 'selenium':
  //   return selenium
  // case 'strapi':
  //   return strapi
  // case 'tensorflow':
  //   return tensorflow
  // case 'webix':
  //   return webix
  // case 'wordpress':
  //   return wordpress
  // case 'azure':
  //   return azure
  // case 'blender':
  //   return blender
  // case 'fastify':
  //   return fastify
  // case 'figma':
  //   return figma
  // case 'flutter':
  //   return flutter
  // case 'haxe':
  //   return haxe
  // case 'ionic':
  //   return ionic
  // case 'markdown':
  //   return markdown
  // case 'microsoft office':
  //   return microsoftoffice
  // case 'picsart':
  //   return picsart
  // case 'sketch':
  //   return sketch
  // case 'unity':
  //   return unity
  // case 'wolframalpha':
  //   return wolframalpha
  // case 'canva':
  //   return canva
  default:
    break
  }
}