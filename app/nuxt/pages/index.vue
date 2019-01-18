<template>
  <div>
    <div class="header">
      <h1>
        {{ kioskTitle }}
      </h1>
    </div>
    <ul class="activity-list">
      <li
        v-for="item in activityItems"
        :key="item._id">
        {{ item.name }}: {{ item.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'kioskTitle',
      'activityItems',
    ]),
  },
  created() {
    this.$store.dispatch('getKiosk');
    this.$store.dispatch('getActivityItems');
  },
};
</script>

<style scoped lang="stylus">
.header
  margin-bottom: 20px
</style>
