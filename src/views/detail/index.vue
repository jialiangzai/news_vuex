<template>
  <div>
    <h1>新闻详情</h1>
    <div class="contents" v-html="detail.content"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  created () {
    this.getDetailById(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getDetailById'])

  },
  computed: {
    ...mapState(['detail'])
  }
}
</script>

<style scoped>
</style>
