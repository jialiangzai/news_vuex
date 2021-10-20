<template>
  <div>
    <h1>新闻列表</h1>
    <ul>
      <li v-for="item in list" :key="item.art_id">
        <router-link :to="`/detail/${item.art_id}`">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  created () {
    this.getNews()
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(['getNews'])
  }
}
</script>

<style scoped>
</style>
