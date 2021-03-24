<template>
  <div>
    <h1>Users</h1>
    <div v-for="user in users.slice(0, 5)" :key="user.id">
      <nuxt-link :to="`/users/${user.id}`">{{ user.name }}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import type { AxiosResponse } from 'axios';
import type { Users } from '@/typings';

export default Vue.extend({
  async asyncData({ $axios }) {
    const response: AxiosResponse<Users[]> = await $axios.get('/users');
    const users = response.data;

    return { users };
  },
  head: {
    title: 'Users - Vue Screencasts',
  },
});
</script>

<style></style>
