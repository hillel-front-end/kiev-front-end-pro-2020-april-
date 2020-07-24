<template>
  <div class="navigation">
    <header class="navigation__header">
      <NavigationItem></NavigationItem>
    </header>
  </div>
</template>

<script>
import NavigationItem from '@/components/NavigationItem'

export default {
  name: 'Navigation',
  data() {

  },
  methods: {

  },
  components: {
    NavigationItem: NavigationItem
  }
}
</script>

<style scoped lang="scss">
.navigation {
  border: 1px solid red;
  padding: 10px;

  &__header {
    color: white;
  }
}
</style>
