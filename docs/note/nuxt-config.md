---
title: 'Nuxtjs Access config property from client'
description: 'Nuxtjs Access config property from client'
---
# Nuxtjs Access config property from client

### Setting Config
Nuxtjs offer 2 types of runtimeConfig, public and private, and can be accessed uisng `$config`

- `publicRuntimeConfig` is available on both **server** and **client**.  

- `privateRuntimeConfig` is only available on **server**

Note: `privateRuntimeConfig` overrides `publicRuntimeConfig`

```js
// nuxt.config.js
export default {
  publicRuntimeConfig: {
    dev: process.env.NODE_ENV !== 'production',
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org'
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  }
}
```

### Access Config from pages, store or components
```vue
<!-- pages/index.vue -->
<template>
  <div :class="$config.dev ? 'debug-screens' : ''">
    <p>Our Url is: {{ $config.baseURL}}</p>
  </div>
</template>


<script>
  asyncData ({ $config: { baseURL } }) {
    const posts = await fetch(`${baseURL}/posts`)
      .then(res => res.json())
  }
</script>
```

::: warning
private config could be exposed if you use $config outside of a server-only context (for example, if you use $config in fetch, asyncData or directly inside your template).
:::

