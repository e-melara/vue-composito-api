<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
import { onActivated } from '@vue/runtime-core'
export default {
  name: 'AboutView',
  setup() {
    onActivated(() => {
      console.log('AboutView activated')
    })
  }
}
</script>
